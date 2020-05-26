import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import LogIn from './Login';

test('Check login tests are running', () => {
	expect(true).toBeTruthy();
});

test('Check that Login input form displays', () => {
	render(
		<Router>
			<LogIn />
		</Router>,
	);
	screen.getByText('Email Address');
	screen.getByText('Password');
});
