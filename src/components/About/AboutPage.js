import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	title: {
		marginTop: '2rem',
		textAlign: 'center',
		fontSize: '2rem',
	},
	subtitle: {
		marginTop: '1rem',
		fontSize: '1rem',
		textAlign: 'center',
	},
	buttonbox: {
		display: 'flex',
		flexDirection: 'column',
		width: '20%',
		margin: '1rem auto',
	},
	buttons: {
		marginTop: '1rem',
	},
	p: {
		fontSize: '50px',
	},
}));

export default function AboutPage() {
	const classes = useStyles();

	return (
		<>
			<Typography className={classes.title} variant="h2" component="h2">
				Bechdel & Beyond
			</Typography>
			<Typography className={classes.subtitle} variant="h5" component="h5">
				A new way to discover, review & share movies that pass the Bechdel Test
				and go beyond...
			</Typography>
			<div className={classes.buttonbox}>
				<Button className={classes.buttons} variant="outlined">
					<Link component={RouterLink} to="/bechdel">
						How it works
					</Link>
				</Button>
				<Button className={classes.buttons} variant="outlined">
					<Link component={RouterLink} to="/">
						Skip to the movies
					</Link>
				</Button>
			</div>
		</>
	);
}
