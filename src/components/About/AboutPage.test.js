import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import AboutPage from './AboutPage';

it('should render About page correctly', () => {
	const about = renderer
		.create(
			<Router>
				<AboutPage />
			</Router>,
		)
		.toJSON();
	expect(about).toMatchSnapshot();
});
