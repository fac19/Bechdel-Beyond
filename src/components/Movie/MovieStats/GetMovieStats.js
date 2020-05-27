import React from 'react';

export function GetMovieStatsCrew({ statsCrewData }) {
	// film stats
	// cast parity
	// crew parity
	if (!statsCrewData) return <h1>Locading</h1>;
	console.log(statsCrewData);
	return <h2>{statsCrewData.gender_parity.male}</h2>;
}

export function GetMovieStatsCast({ statsCastData }) {
	// film stats
	// cast parity
	// crew parity

	return <h1>{statsCastData.gender_parity_cast.female}</h1>;
}
