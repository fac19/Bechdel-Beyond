import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetailsPage from './GetMovieDetails';

test('Check movie page tests are running', () => {
	expect(true).toBeTruthy();
});

it('should render movie details section correctly on movie page', () => {
	const movieData = {
		title: 'Titanic',
		movapi_id: '34',
		poster: 'https://m.media-amazon.com/images...',
		year: '1997',
		rated: 'PG-13',
		runtime: '194min',
		genre: "['drama', 'romance']",
		plot: 'A seventeen-year-old aristocrat falls in love with...',
		filmLanguage: 'English',
		country: 'USA',
		awards: 'Won 11 oscars and another 114 wins',
		ratings: '86',
	};

	const statsCrewData = {
		id: 1,
		director: 'James',
		assistant_director: 'Ako',
		producer: 'Gio',
		gender_parity: {
			male: 2,
			female: 3,
			notlisted: 34,
		},
		movapi_id: 34,
	};
	const movieDetails = renderer
		.create(
			<MovieDetailsPage movieData={movieData} statsCrewData={statsCrewData} />,
		)
		.toJSON();
	expect(movieDetails).toMatchSnapshot();
});

it('should render <loading> on movie details section if no data', () => {
	const movieDetails = renderer.create(<MovieDetailsPage />).toJSON();
	expect(movieDetails).toMatchSnapshot();
});
