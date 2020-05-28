import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Bechdel from './Bechdel';

it('About page renders correctly', () => {
	const content = renderer
		.create(
			<Router>
				<Bechdel />
			</Router>,
		)
		.toJSON();
	expect(content).toMatchSnapshot();
});
