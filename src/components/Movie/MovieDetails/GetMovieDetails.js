import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	p: {
		fontSize: '50px',
	},
}));

export default function GetMovieDetails({ movieData, statsCrewData }) {
	const classes = useStyles();

	if (!movieData) return <h1>Locading</h1>;
	return (
		<>
			<Typography className={classes.title} variant="h4" component="h3">
				{movieData.title}
			</Typography>
			<Typography variant="h6" component="h3">
				Director: {statsCrewData.director}
			</Typography>
			<Typography variant="h6" component="h3">
				Producer: {statsCrewData.producer}
			</Typography>
			<Typography variant="h6" component="h3">
				Country: {movieData.country}
			</Typography>
			<Typography variant="h6" component="h3">
				Year: {movieData.year}
			</Typography>
			<Typography variant="h6" component="h3">
				Runtime: {movieData.runtime}
			</Typography>
			<Typography variant="p" component="p">
				Plot: {movieData.plot}
			</Typography>
		</>
	);
}
