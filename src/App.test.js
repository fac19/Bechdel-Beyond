import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

test('renders menu bar components correctly when user is not logged in', () => {
	const { getByText } = render(<App />);
	expect(getByText(/Search Movies/)).toBeTruthy();
	expect(getByText(/About/)).toBeTruthy();
	expect(getByText(/Login/)).toBeTruthy();
	expect(getByText(/Sign Up/i)).toBeTruthy();
});

// test('renders menu bar components correctly when user is logged in', () => {
// 	const { getByText } = render(<App />);
// 	expect(getByText(/Search Movies/)).toBeTruthy();
// 	expect(getByText(/About/)).toBeTruthy();
// 	expect(getByText(/Login/)).toBeTruthy();
// 	expect(getByText(/Sign Up/i)).toBeTruthy();
// });
