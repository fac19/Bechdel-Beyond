import React from 'react';
import renderer from 'react-test-renderer';

import { GetMovieStatsCast, GetMovieStatsCrew } from './GetMovieStats';

it('Cast stats section renders correctly on movie page', () => {
	const stats = renderer.create(<GetMovieStatsCast />).toJSON();
	expect(stats).toMatchSnapshot();
});

it('Cre stats section renders correctly on movie page', () => {
	const stats = renderer.create(<GetMovieStatsCrew />).toJSON();
	expect(stats).toMatchSnapshot();
});
