import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	ratio: {
		'margin': '3% auto',
		'width': '80%',
		'& h6': {
			marginTop: '.5rem',
			fontFamily: 'Montserrat, sans-serif',
			fontSize: '1.1rem',
		},
	},
	header: {
		textAlign: 'centre',
		fontFamily: 'Montserrat, sans-serif',
		fontWeight: 'Semi-bold',
	},
}));

export function GetMovieStatsCast({ statsCastData }) {
	const classes = useStyles();

	if (!statsCastData) return <h1>Locading</h1>;
	return (
		<div className={classes.ratio}>
			<Typography className={classes.header} variant="h5" component="h3">
				Cast gender balance:
			</Typography>
			<Typography variant="h6">
				Female: {statsCastData.gender_parity_cast.female}
			</Typography>
			<Typography variant="h6">
				Male: {statsCastData.gender_parity_cast.male}
			</Typography>
			<Typography variant="h6">
				Not declared: {statsCastData.gender_parity_cast.notlisted}
			</Typography>
		</div>
	);
}

export function GetMovieStatsCrew({ statsCrewData }) {
	const classes = useStyles();

	if (!statsCrewData) return <h1>Loading</h1>;

	return (
		<div className={classes.ratio}>
			<Typography className={classes.header} variant="h5" component="h3">
				Crew gender balance:
			</Typography>
			<Typography variant="h6">
				Female: {statsCrewData.gender_parity.female}
			</Typography>
			<Typography variant="h6">
				Male: {statsCrewData.gender_parity.male}
			</Typography>
			<Typography variant="h6">
				Not declared: {statsCrewData.gender_parity.notlisted}
			</Typography>
		</div>
	);
}
