import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		flexGrow: 1,
		margin: '0 auto',
	},
	title: {
		marginTop: '2rem',
		textAlign: 'center',
		fontSize: '2rem',
	},
	subtitle: {
		marginTop: '1rem',
		textAlign: 'center',
		fontSize: '1rem',
	},
	button: {
		width: '20%',
		height: 'auto',
		margin: '0 auto',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function BechdelPage() {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<>
			{activeStep === 0 ? (
				<>
					<Typography className={classes.title} variant="h3">
						The Bechdel Test
					</Typography>
					<div className={classes.subtitle}>
						<Link to="">Alison Bechdel , Dykes to Watch Out For, 1985</Link>
					</div>

					<Paper className={classes.paper}>
						A way of evaluating whether or not a movie portrays women in a way
						that is sexist or characterized by gender stereotyping
					</Paper>
				</>
			) : activeStep === 1 ? (
				<>
					<Typography className={classes.title} variant="h4">
						A Movie passes if...
					</Typography>
					<Paper className={classes.paper}>There are at least 2 women</Paper>
					<Paper className={classes.paper}>That talk to each other</Paper>
					<Paper className={classes.paper}>
						About something other than men.
					</Paper>
				</>
			) : (
				<>
					<Typography className={classes.title} variant="h6">
						Help others find more diverse and interesting movies by sharing:
					</Typography>
					<Divider />

					<Typography className={classes.subtitle}>
						Does the movie pass the Bechdel Test?
					</Typography>

					<Divider />
					<Typography className={classes.subtitle}>
						Are you satisfied with the gender representation?
					</Typography>
				</>
			)}
			<Divider />

			<MobileStepper
				variant="dots"
				steps={3}
				position="static"
				activeStep={activeStep}
				className={classes.root}
				nextButton={
					<Button size="small" onClick={handleNext} disabled={activeStep === 2}>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
			<div className={classes.button}>
				<Button variant="outlined">
					{activeStep !== 2 ? (
						<Link component={RouterLink} to="/">
							Skip to the movies
						</Link>
					) : (
						<Link component={RouterLink} to="/">
							Show me the movies!
						</Link>
					)}
				</Button>
			</div>
		</>
	);
}
