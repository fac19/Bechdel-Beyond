import React from 'react';
import renderer from 'react-test-renderer';

import getMovieTop from './GetMovie';

test('Check movie page tests are running', () => {
	expect(true).toBeTruthy();
});

it('Get movie section renders correctly on movie page', () => {
	const movieTop = renderer.create(<getMovieTop />).toJSON();
	expect(movieTop).toMatchSnapshot();
});
