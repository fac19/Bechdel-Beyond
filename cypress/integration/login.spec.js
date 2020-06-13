/// <reference types="cypress" />

// Stub fetch object because cypress doesnt handle
// fetch requests
import { fetchStub } from '../support/helpers';

describe('Can log in', () => {
	beforeEach(function () {
		// register the stub as a local function
		this.fetchStub = fetchStub();
	});

	it('should go to login form', () => {
		cy.visit('/');
		cy.get('[data-cy=menu]').click();
		cy.get('[data-cy=menu-item]').contains('Login').click();
		cy.url().should('contain', '/login');
	});

	it('should not progress if no password/email entered', () => {
		cy.visit('/login');
		cy.get('button[type=submit]').click();
		cy.url().should('eq', Cypress.config().baseUrl + '/login');
	});

	it('should log in', function () {
		const testToken =
			'$2a$10$.4XK5WMk1dTdJIpanxAEZOzmZLArCgWzeTTBSDCNqmjtFP/GHvNce';

		// set the reponse we want from fetch
		this.fetchStub.resolve({
			json() {
				return { token: testToken };
			},
			ok: true,
		});

		cy.visit('/login');
		cy.get('#email').type('dummy@email.com');
		cy.get('#password').type('dummypassword');

		// get the window object and exchange fetch
		// with our custom stub fetchStub
		cy.window().then(function (win) {
			cy.stub(win, 'fetch')
				.withArgs('https://apibechdel.herokuapp.com/login')
				.as('fetchLogin')
				.returns(this.fetchStub.promise);
		});
		cy.get('button[type=submit]').click();
		cy.get('@fetchLogin').should('be.calledOnce');
		cy.window().then((win) => {
			cy.expect(win.localStorage.getItem('access token')).to.eq(testToken);
		});
	});

	it('should not add token if server response is not ok ', function () {
		const testToken =
			'$2a$10$.4XK5WMk1dTdJIpanxAEZOzmZLArCgWzeTTBSDCNqmjtFP/GHvNce';

		// set the reponse we want from fetch
		this.fetchStub.resolve({
			json() {
				return { token: testToken };
			},
			ok: false,
		});

		cy.visit('/login');
		cy.get('#email').type('dummy@email.com');
		cy.get('#password').type('dummypassword');

		// get the window object and exchange fetch
		// with our custom stub fetchStub
		cy.window().then(function (win) {
			cy.stub(win, 'fetch')
				.withArgs('https://apibechdel.herokuapp.com/login')
				.as('fetchLogin')
				.returns(this.fetchStub.promise);
		});
		cy.get('button[type=submit]').click();
		cy.get('@fetchLogin').should('be.calledOnce');
		cy.window().then((win) => {
			cy.expect(win.localStorage.getItem('access token')).to.eq(null);
		});
	});
});
