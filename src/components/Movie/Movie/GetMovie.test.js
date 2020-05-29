import React from 'react';
import renderer from 'react-test-renderer';

import getMovieTop from './GetMovie';

test('Check movie page tests are running', () => {
	expect(true).toBeTruthy();
});

it('should render <loading> in movie section if no data', () => {
	const movieTop = renderer.create(<getMovieTop />).toJSON();
	expect(movieTop).toMatchSnapshot();
});

it('should render  getMovie section correctly if data provided', () => {
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
	const reviewData = [
		{
			user_id: 1,
			film_id: 1,
			bechdel_1: 'true',
			bechdel_2: 'false',
			bechdel_3: 'false',
			beyond: 3,
			comment: 'I loved it!',
		},
		{
			user_id: 2,
			film_id: 1,
			bechdel_1: 'true',
			bechdel_2: 'false',
			bechdel_3: 'false',
			beyond: 3,
			comment: 'I loved it!',
		},
	];
	const movieTop = renderer
		.create(<getMovieTop movieData={movieData} reviewData={reviewData} />)
		.toJSON();
	expect(movieTop).toMatchSnapshot();
});
