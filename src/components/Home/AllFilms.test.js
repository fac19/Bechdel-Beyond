import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
// import { shallow, mount, render } from 'enzyme';

import AllFilms from './AllFilms';
// import getData from '../../utils/getData';

it('should render <loading> in AllFilms page if no data', () => {
	const filmCards = renderer
		.create(
			<Router>
				<AllFilms />
			</Router>,
		)
		.toJSON();
	expect(filmCards).toMatchSnapshot();
});

it('should render AllFilms page correctly if data provided', () => {
	const filmData = [
		{
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
		},
		{
			title: 'Titanic',
			movapi_id: '35',
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
		},
	];
	const filmCards = renderer
		.create(
			<Router>
				<AllFilms filmData={filmData} />
			</Router>,
		)
		.toJSON();
	expect(filmCards).toMatchSnapshot();
});
