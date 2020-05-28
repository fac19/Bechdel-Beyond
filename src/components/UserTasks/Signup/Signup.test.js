import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Signup from './Signup';

it('Signup page renders correctly', () => {
	const signUp = renderer
		.create(
			<Router>
				<Signup />
			</Router>,
		)
		.toJSON();
	expect(signUp).toMatchSnapshot();
});
