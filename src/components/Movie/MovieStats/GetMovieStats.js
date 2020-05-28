import React from 'react';
import Typography from '@material-ui/core/Typography';

export function GetMovieStatsCast({ statsCastData }) {
	if (!statsCastData) return <h1>Locading</h1>;
	return (
		<>
			<Typography variant="h5" component="h3">
				Cast gender balance:
			</Typography>
			<Typography variant="h5" component="h3">
				Female: {statsCastData.gender_parity_cast.female}
			</Typography>
			<Typography variant="h5" component="h3">
				Male: {statsCastData.gender_parity_cast.male}
			</Typography>
			<Typography variant="h5" component="h3">
				Not declared: {statsCastData.gender_parity_cast.notlisted}
			</Typography>
		</>
	);
}

export function GetMovieStatsCrew({ statsCrewData }) {
	if (!statsCrewData) return <h1>Loading</h1>;

	return (
		<>
			<Typography variant="h5" component="h3">
				Crew gender balance:
			</Typography>
			<Typography variant="h5" component="h3">
				Female: {statsCrewData.gender_parity.female}
			</Typography>
			<Typography variant="h5" component="h3">
				Male: {statsCrewData.gender_parity.male}
			</Typography>
			<Typography variant="h5" component="h3">
				Not declared: {statsCrewData.gender_parity.notlisted}
			</Typography>
		</>
	);
}
