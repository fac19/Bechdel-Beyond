import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function GetMovieDetails({ movieData, statsCrewData }) {
	return (
		<>
			<Typography variant="h3" component="h3">
				{movieData.title}
			</Typography>
			<Typography variant="h5" component="h3">
				Director: {statsCrewData.director}
			</Typography>
			<Typography variant="h5" component="h3">
				Producer: {statsCrewData.producer}
			</Typography>
			<Typography variant="h5" component="h3">
				{movieData.country}
			</Typography>
			<Typography variant="h5" component="h3">
				{movieData.year}
			</Typography>
			<Typography variant="h5" component="h3">
				{movieData.runtime}
			</Typography>
			<Typography variant="h5" component="h3">
				Plot: {movieData.plot}
			</Typography>
			<Typography variant="h5" component="h3">
				{movieData.awards}
			</Typography>
		</>
	);
}
