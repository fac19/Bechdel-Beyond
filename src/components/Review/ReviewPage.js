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
	const [radioValue, setValue] = React.useState('');
	const [bechdelForm, setForm] = React.useState({
		bechdel_1: '',
		bechdel_2: '',
		bechdel_3: '',
		beyond: '',
		comment: '',
	});

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		console.log(bechdelForm);
		setValue('');
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
		console.log(bechdelForm);
		setValue('');
	};

	let reviewQuestion = '';

	const handleClick = (event) => {
		const { name, value } = event.target;
		setValue(value);
		setForm({ ...bechdelForm, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('https://localhost:3001/films:title/reviews', {
			headers: { 'content-type': 'application/JSON' },
			method: 'POST',
			body: JSON.stringify(bechdelForm),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Could not post review');
				}
			})
			.catch((err) => console.log(err));
	};
	//window.localStorage.setItem('access token', json.token);

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
						{activeStep !== 3 ? (
							<CardMedia
								component={'img'}
								src={Movie.poster}
								title={Movie.title}
							/>
						) : (
							''
						)}

						<Typography>
							{activeStep === 0
								? (reviewQuestion = 'RENDER FIRST QUESTION')
								: activeStep === 1
								? (reviewQuestion = 'RENDER SECOND QUESTION')
								: activeStep === 2
								? (reviewQuestion = 'RENDER THIRD QUESTION')
								: (reviewQuestion = 'RENDER BEYOND STUFF')}
						</Typography>

						{activeStep === 0 ? (
							<RadioGroup
								aria-label={reviewQuestion}
								checked={false}
								name="bechdel_1"
								row
								value={radioValue}
							>
								<FormControlLabel
									value="true"
									name="bechdel_1"
									control={<Radio onClick={handleClick} />}
									label="Yes"
								/>
								<FormControlLabel
									value="false"
									name="bechdel_1"
									control={<Radio onClick={handleClick} />}
									label="No"
								/>
							</RadioGroup>
						) : activeStep === 1 ? (
							<RadioGroup
								aria-label={reviewQuestion}
								checked={false}
								name="bechdel_2"
								row
								value={radioValue}
							>
								<FormControlLabel
									value="true"
									name="bechdel_2"
									control={<Radio onClick={handleClick} />}
									label="Yes"
								/>
								<FormControlLabel
									value="false"
									name="bechdel_2"
									control={<Radio onClick={handleClick} />}
									label="No"
								/>
							</RadioGroup>
						) : activeStep === 2 ? (
							<RadioGroup
								aria-label={reviewQuestion}
								checked={false}
								name="bechdel_3"
								row
								value={radioValue}
							>
								<FormControlLabel
									value="true"
									name="bechdel_3"
									control={<Radio onClick={handleClick} />}
									label="Yes"
								/>
								<FormControlLabel
									value="false"
									name="bechdel_3"
									control={<Radio onClick={handleClick} />}
									label="No"
								/>
							</RadioGroup>
						) : (
							<>
								<RadioGroup
									aria-label={reviewQuestion}
									checked={false}
									name="Beyond"
									row
									value={radioValue}
								>
									<FormControlLabel
										value="0"
										name="beyond"
										control={<Radio onClick={handleClick} />}
										label="👎"
									/>
									<FormControlLabel
										value="1"
										name="beyond"
										control={<Radio onClick={handleClick} />}
										label="👎"
									/>
									<FormControlLabel
										value="2"
										name="beyond"
										control={<Radio onClick={handleClick} />}
										label="👉"
									/>
									<FormControlLabel
										value="3"
										name="beyond"
										control={<Radio onClick={handleClick} />}
										label="👍"
									/>
									<FormControlLabel
										value="4"
										name="beyond"
										control={<Radio onClick={handleClick} />}
										label="👍"
									/>
								</RadioGroup>
								<TextField
									id="outlined-basic"
									label="Outlined"
									variant="outlined"
								/>

								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									Submit
								</Button>
							</>
						)}
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
