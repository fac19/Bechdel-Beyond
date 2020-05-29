import React from 'react';
import renderer from 'react-test-renderer';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import MoviePage from './MoviePage';
// import GetMovie from './Movie/GetMovie';

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

// configure({adapter: new Adapter()});

// describe('MoviePage', () => {
//   it('should render getMovie section', () => {
//     const params = 'titanic';
//     const wrapper = shallow(<MoviePage match={params}></MoviePage>)
//     expect(wrapper.find(GetMovie)).toHaveLength(1);
//   })
// })
