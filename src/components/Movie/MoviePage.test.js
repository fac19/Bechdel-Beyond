import React from 'react';
import renderer from 'react-test-renderer';

import MoviePage from './MoviePage';

test('Check movie page tests are running', () => {
	expect(true).toBeTruthy();
});

it('Movie page renders correctly', () => {
	const params = 'titanic';
	const moviePage = renderer
		.create(<MoviePage match={params}></MoviePage>)
		.toJSON();
	expect(moviePage).toMatchSnapshot();
});
