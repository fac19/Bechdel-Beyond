import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
// import { shallow, mount, render } from 'enzyme';

import AllFilms from './AllFilms';
// import getData from '../../utils/getData';

it('should render AllFilms page correctly', () => {
	const filmCards = renderer
		.create(
			<Router>
				<AllFilms />
			</Router>,
		)
		.toJSON();
	expect(filmCards).toMatchSnapshot();
});

// describe.only('AllFilms', () => {
//   it('should fetch data from /films', done => {
//     const mockResponse = [{ "title": "Titanic", "movapi_id": "34", "poster": "https://m.media-amazon.com/images...", "year": "1997", "rated": "PG-13", "runtime": "194min", "genre": "['drama', 'romance']", "plot": "A seventeen-year-old aristocrat falls in love with...", "filmLanguage": "English", "country": "USA", "awards": "Won 11 oscars and another 114 wins", "ratings":"87"}];
//     const mockJsonPromise = Promise.resolve(mockResponse);
//     const mockFetchPromise = Promise.resolve({
//       json: () => mockJsonPromise,
//     });
//     jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

//     getData('/films').then(() => {
//       expect(global.fetch).toHaveBeenCalledTimes(1);
//       expect(global.fetch).toHaveBeenCalledWith('https://apibechdel.herokuapp.com/films');
//       global.fetch.mockClear();
//         done();
//     })
//   })
// })
