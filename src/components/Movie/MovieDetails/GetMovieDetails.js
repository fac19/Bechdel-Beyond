import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'width': '80vw',
		'margin': '3% auto',
		'display': 'flex',
		'flexDirection': 'row',
		'justifyContent': 'center',
		'alignItems': 'center',
		'& h6': {
			fontFamily: 'Montserrat, sans-serif',
		},
	},
	credits: {
		textAlign: 'left',
		fontFamily: 'Montserrat, sans-serif',
		marginRight: '5%',
	},
	title: {
		fontFamily: 'Merriweather, serif',
		fontSize: '2.2rem',
		textAlign: 'left',
		marginBottom: '.8rem',
	},
	time: {
		margin: '3% auto',
	},
	plot: {
		textAlign: 'left',
		maxWidth: '40%',
		marginLeft: '5%',
	},
	runtime: {
		textAlign: 'right',
	},
}));

export default function GetMovieDetails({ movieData, statsCrewData }) {
	const classes = useStyles();

	if (!movieData) return <h1>Loading</h1>;
	return (
		<div className={classes.root}>
			<div data-cy={'credits'} className={classes.credits}>
				<Typography className={classes.title} variant="h4" component="h3">
					{movieData.title}
				</Typography>
				<Typography variant="h6">Director: {statsCrewData.director}</Typography>
				<Typography variant="h6">Producer: {statsCrewData.producer}</Typography>
				<Typography className={classes.time} variant="body1" component="p">
					{movieData.country}, {movieData.year}
				</Typography>
				<Typography variant="body1" component="p">
					{movieData.runtime}
				</Typography>
			</div>
			<div data-cy={'synopsis'} className={classes.plot}>
				<Typography variant="h6">Synopsis</Typography>
				<Typography variant="body1">{movieData.plot}</Typography>
			</div>
		</div>
	);
}
