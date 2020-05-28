import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import AllFilms from './AllFilms';

it('AllFilms page renders correctly', () => {
	const filmCards = renderer
		.create(
			<Router>
				<AllFilms />
			</Router>,
		)
		.toJSON();
	expect(filmCards).toMatchSnapshot();
});
