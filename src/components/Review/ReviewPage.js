import React from 'react';

import { Redirect } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		'fontFamily': 'Montserrat, sans-serif',
		'& body1': {
			fontFamily: 'Montserrat, sans-serif',
		},
	},
	title: {
		marginTop: '3rem',
		textAlign: 'center',
		fontSize: '2rem',
		fontFamily: 'Merriweather, serif',
		fontWeight: 'bold',
	},
	media: {
		height: '300px',
	},
	paper: {
		color: theme.palette.text.secondary,
	},
	question: {
		marginTop: '2rem',
		fontFamily: 'Montserrat, sans-serif',
		textAlign: 'center',
		padding: '3% 5%',
		fontSize: '1.3rem',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		margin: theme.spacing(6, 0, 2),
	},
	radio: {
		display: 'block',
		margin: '4% auto',
		textAlign: 'center',
		fontFamily: 'Montserrat, sans-serif',
	},
	beyond: {
		margin: '1.5rem',
		fontFamily: 'Montserrat, sans-serif',
		lineHeight: '1.7',
	},
	comment: {
		fontFamily: 'Montserrat, sans-serif',
		fontSize: '1.2rem',
		padding: '1%',
		display: 'block',
		margin: '4% auto',
		textAlign: 'center',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function ReviewPage({ match: { params }, filmData }) {
	const [fetchState, setFetchState] = React.useState('');

	const moviePoster = filmData.filter((film) => film.title === params.title);

	const movie = {
		title: params.title,
		poster: moviePoster[0].poster,
	};

	const showPoster = (poster) => {
		if (poster.status === 404) {
			return 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
		}
		return poster;
	};

	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const [radioValue, setValue] = React.useState('');
	const [bechdelForm, setForm] = React.useState({
		bechdel_1: '',
		bechdel_2: '',
		bechdel_3: '',
		beyond: 0,
		comment: '',
	});

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setValue('');
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
		setValue('');
	};

	let reviewQuestion = '';

	const handleEvent = (event) => {
		let { name, value } = event.target;
		if (name !== 'comment') {
			setValue(value);
			value = name === 'beyond' ? +value : value;
		}

		setForm({ ...bechdelForm, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFetchState('loading');
		fetch(`https://apibechdel.herokuapp.com/film/${movie.title}/reviews`, {
			headers: {
				'content-type': 'application/JSON',
				'Authorization': `Bearer ${window.localStorage.getItem(
					'access token',
				)}`,
			},
			method: 'POST',
			body: JSON.stringify(bechdelForm),
		})
			.then((response) => {
				if (response.ok) {
					setFetchState('success');
					return response.json();
				} else {
					throw new Error('Could not post review');
				}
			})
			.catch((err) => {
				setFetchState('err');
				console.log(err);
			});
	};

	return (
		<>
			{fetchState === 'success' ? (
				<Redirect to={`/film/${params.title}`} />
			) : (
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Typography
						data-cy={'review-movie'}
						component="h1"
						className={classes.title}
					>
						{movie.title}
					</Typography>
					<Divider />
					<form
						className={classes.form}
						noValidate
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit(e);
						}}
					>
						<Container>
							{activeStep !== 3 ? (
								<CardMedia
									data-cy={'review-card'}
									className={classes.media}
									component={'img'}
									src={showPoster(movie.poster)}
									title={movie.title}
								/>
							) : (
								''
							)}

							<Paper data-cy={'review-question'} className={classes.question}>
								{activeStep === 0
									? (reviewQuestion = 'Are there at least 2 women ?')
									: activeStep === 1
									? (reviewQuestion = 'Do they talk to each other ?')
									: activeStep === 2
									? (reviewQuestion =
											'Do they talk about something other than men ?')
									: (reviewQuestion =
											'How satisfied were you with the gender representation?')}
							</Paper>
							{activeStep === 0 ? (
								<RadioGroup
									aria-label={reviewQuestion}
									checked={false}
									name="bechdel_1"
									row
									value={radioValue}
									className={classes.radio}
								>
									<FormControlLabel
										value="true"
										name="bechdel_1"
										control={<Radio onClick={handleEvent} />}
										label="Yes"
									/>
									<FormControlLabel
										value="false"
										name="bechdel_1"
										control={<Radio onClick={handleEvent} />}
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
									className={classes.radio}
								>
									<FormControlLabel
										value="true"
										name="bechdel_2"
										control={<Radio onClick={handleEvent} />}
										label="Yes"
									/>
									<FormControlLabel
										value="false"
										name="bechdel_2"
										control={<Radio onClick={handleEvent} />}
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
									className={classes.radio}
								>
									<FormControlLabel
										value="true"
										name="bechdel_3"
										control={<Radio onClick={handleEvent} />}
										label="Yes"
									/>
									<FormControlLabel
										value="false"
										name="bechdel_3"
										control={<Radio onClick={handleEvent} />}
										label="No"
									/>
								</RadioGroup>
							) : (
								<>
									<fieldset className={classes.beyond}>
										<legend>
											<b>Things to think about:</b>
										</legend>
										How many of the cast are women? What percentage of the
										dialogue do they speak?<br></br>
										Do they drive their own choices?
									</fieldset>
									<RadioGroup
										aria-label={reviewQuestion}
										checked={false}
										name="beyond"
										row
										value={radioValue}
									>
										<FormControlLabel
											value="0"
											name="beyond"
											control={<Radio onClick={handleEvent} />}
											label="🤬"
										/>
										<FormControlLabel
											value="1"
											name="beyond"
											control={<Radio onClick={handleEvent} />}
											label="😞"
										/>
										<FormControlLabel
											value="2"
											name="beyond"
											control={<Radio onClick={handleEvent} />}
											label="😕"
										/>
										<FormControlLabel
											value="3"
											name="beyond"
											control={<Radio onClick={handleEvent} />}
											label="🙂"
										/>
										<FormControlLabel
											value="4"
											name="beyond"
											control={<Radio onClick={handleEvent} />}
											label="💖"
										/>
									</RadioGroup>
									<div className={classes.comment}>
										Let us know what you thought!
										<TextField
											id="outlined-basic"
											aria-label="comment"
											variant="outlined"
											name="comment"
											placeholder="It was..."
											onChange={handleEvent}
										/>
									</div>
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
									data-cy={'review-next'}
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
									data-cy={'review-back'}
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
			)}
		</>
	);
}
