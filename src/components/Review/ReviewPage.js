import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Link from '@material-ui/core/Link';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Movie = {
	title: 'Jo Jo rabbit',
	poster:
		'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png',
};

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
		margin: theme.spacing(6, 0, 2),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function ReviewPage() {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	let reviewArr = {};

	const [value, setValue] = React.useState(null);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Typography component="h1" variant="h5">
					Review
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<Container>
						<Typography>{Movie.title}</Typography>
						<CardMedia
							component={'img'}
							src={Movie.poster}
							title={Movie.title}
						/>
						<Typography>
							{activeStep === 0
								? 'RENDER FIRST QUESTION'
								: activeStep === 1
								? 'RENDER SECOND QUESTION'
								: activeStep === 2
								? 'RENDER THIRD QUESTION'
								: 'RENDER BEYOND STUFF'}
						</Typography>
					</Container>

					<MobileStepper
						variant="dots"
						steps={4}
						position="static"
						activeStep={activeStep}
						className={classes.root}
						nextButton={
							<Button
								size="small"
								onClick={handleNext}
								disabled={activeStep === 3}
							>
								Next
								{theme.direction === 'rtl' ? (
									<KeyboardArrowLeft />
								) : (
									<KeyboardArrowRight />
								)}
							</Button>
						}
						backButton={
							<Button
								size="small"
								onClick={handleBack}
								disabled={activeStep === 0}
							>
								{theme.direction === 'rtl' ? (
									<KeyboardArrowRight />
								) : (
									<KeyboardArrowLeft />
								)}
								Back
							</Button>
						}
					/>
				</form>
			</Container>
		</>
	);
}

/* 
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Next
          </Button>
*/
