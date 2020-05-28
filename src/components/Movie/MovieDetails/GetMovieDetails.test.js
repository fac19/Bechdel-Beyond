import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetailsPage from './GetMovieDetails';

test('Check movie page tests are running', () => {
	expect(true).toBeTruthy();
});

it('Get movie details section renders correctly on movie page', () => {
	const movieDetails = renderer.create(<MovieDetailsPage />).toJSON();
	expect(movieDetails).toMatchSnapshot();
});
