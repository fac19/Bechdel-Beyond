import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import LogIn from './Login';
import App from '../../../App';

const setup = () => {
	const login = render(
		<Router>
			<LogIn />
		</Router>,
	);
	const emailInput = screen.getByLabelText(/Email/i, { selector: 'input' });
	const passwordInput = login.getByLabelText(/Password/i, {
		selector: 'input',
	});

	return {
		emailInput,
		passwordInput,
		...login,
	};
};

const renderHome = () => {
	const homePage = render(<App />);
	return { ...homePage };
};

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

test('Can fill in input boxes and login', () => {
	const { emailInput, passwordInput } = setup();
	expect(emailInput.value).toBe('');
	fireEvent.change(emailInput, { target: { value: 'guy@someguy.com' } });
	fireEvent.change(passwordInput, { target: { value: '123' } });
	expect(emailInput.value).toBe('guy@someguy.com');
	const LoginBtn = screen.getByText('Sign In');
	fireEvent.click(LoginBtn);
});

it('Login page renders correctly', () => {
	const login = renderer
		.create(
			<Router>
				<LogIn />
			</Router>,
		)
		.toJSON();
	expect(login).toMatchSnapshot();
});
