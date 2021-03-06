import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Signup({ setLoggedIn }) {
	const classes = useStyles();

	const [userEmail, setUserEmail] = React.useState('');
	const [fetchState, setFetchState] = React.useState('');
	const [username, setUsername] = React.useState('');
	const [userPassword, setUserPassword] = React.useState('');

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form
					className={classes.form}
					onSubmit={(e) => {
						setFetchState('Signing Up...');
						e.preventDefault();
						fetch('https://apibechdel.herokuapp.com/signup', {
							headers: { 'content-type': 'application/JSON' },
							method: 'POST',
							body: JSON.stringify({
								username: username,
								email: userEmail,
								password: userPassword,
							}),
						})
							.then((response) => {
								if (response.ok) {
									return response.json();
								} else {
									throw new Error('Fetch failed');
								}
							})
							.then(
								(json) =>
									window.localStorage.setItem('access token', json.token),
								setLoggedIn(true),
							);
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								autoComplete="username"
								name="username"
								variant="outlined"
								fullWidth
								id="Username"
								label="Username"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								required
								variant="outlined"
								fullWidth
								id="email"
								label="Email Address"
								type="email"
								name="email"
								autoComplete="email"
								onChange={(e) => setUserEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(e) => setUserPassword(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Typography>
						{fetchState === 'error' ? 'Error: cannot sign up' : fetchState}
					</Typography>
					<Grid container justify="flex-end">
						<Grid item>
							<Link component={RouterLink} to="/login" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
