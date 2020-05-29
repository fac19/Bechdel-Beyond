import React from 'react';
import renderer from 'react-test-renderer';

import { GetMovieStatsCast, GetMovieStatsCrew } from './GetMovieStats';

it('should render <lodading> in csst stats section if no data', () => {
	const stats = renderer.create(<GetMovieStatsCast />).toJSON();
	expect(stats).toMatchSnapshot();
});

it('should render cast stats section correctly if data provided', () => {
	const statsCastData = {
		id: 16,
		gender_parity_cast: {
			male: 51,
			female: 27,
			notlisted: 38,
		},
		movapi_id: 597,
	};

	const stats = renderer
		.create(<GetMovieStatsCast statsCastData={statsCastData} />)
		.toJSON();
	expect(stats).toMatchSnapshot();
});

it('should render <lodading> in crew stats section if no data', () => {
	const stats = renderer.create(<GetMovieStatsCrew />).toJSON();
	expect(stats).toMatchSnapshot();
});

it('should render crew stats section correctly if data provided', () => {
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

	const stats = renderer
		.create(<GetMovieStatsCrew statsCrewData={statsCrewData} />)
		.toJSON();
	expect(stats).toMatchSnapshot();
});
