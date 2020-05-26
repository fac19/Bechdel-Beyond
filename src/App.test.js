import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

test('renders menu bar components correctly when user is not logged in', () => {
	const { getByText } = render(<App />);
	expect(getByText(/Search Movies/)).toBeTruthy();
	expect(getByText(/About/)).toBeTruthy();
	expect(getByText(/Logn/)).toBeTruthy();
	expect(getByText(/Sign Up/i)).toBeTruthy();
});
