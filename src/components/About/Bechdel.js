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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '3rem',
		maxWidth: 400,
		flexGrow: 1,
		margin: '0 auto',
	},
	title: {
		marginTop: '3rem',
		textAlign: 'center',
		fontSize: '2rem',
		fontFamily: 'Merriweather, serif',
		fontWeight: 'bold',
	},
	subtitle: {
		marginTop: '1rem',
		textAlign: 'center',
		fontSize: '0.7rem',
		fontFamily: 'Merriweather, serif',
	},
	stepperLine: {
		width: '70%',
		margin: '0 auto',
	},
	button: {
		display: 'block',
		maxWidth: '40%',
		margin: '0 auto',
		marginTop: '4rem',
	},
	buttonLink: {
		fontSize: '0.7rem',
		fontFamily: 'Montserrat, sans-serif',
	},
	beyond: {
		textAlign: 'center',
	},
	beyondHeader: {
		marginTop: '3rem',
		fontSize: '1.5rem',
		fontFamily: 'Merriweather, serif',
	},
	questions: {
		marginTop: '3rem',
		fontFamily: 'Montserrat, sans-serif',
	},
	demos: {
		display: 'flex',
		justifyContent: 'center',
		padding: '5px 7px',
	},
	paper: {
		margin: '4% 10%',
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	emojiBox: {
		margin: '2% auto',
		display: 'block',
		maxWidth: '50%',
		fontSize: '1.5rem',
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
				<div className={classes.beyond}>
					<Typography className={classes.beyondHeader} variant="h6">
						Help others find more diverse and interesting movies by sharing:
					</Typography>

					<Typography className={classes.questions}>
						Does the movie pass the Bechdel Test?
					</Typography>
					<RadioGroup className={classes.demos} name="Test" row>
						<FormControlLabel value="true" label="Yes" control={<Radio />} />
						<FormControlLabel value="false" label="No" control={<Radio />} />
					</RadioGroup>
					<Typography className={classes.questions}>
						Are you satisfied with the gender representation?
					</Typography>
					<div className={classes.emojiBox}>
						<span role="img" aria-label="emojis" className={classes.demos}>
							🤬 😞 😕 🙂 💖
						</span>
					</div>
				</div>
			)}
			<Divider className={classes.stepperLine} />

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
			<Button className={classes.button} variant="outlined">
				{activeStep !== 2 ? (
					<Link className={classes.buttonLink} component={RouterLink} to="/">
						Skip to the movies
					</Link>
				) : (
					<Link className={classes.buttonLink} component={RouterLink} to="/">
						Show me the movies!
					</Link>
				)}
			</Button>
		</>
	);
}
