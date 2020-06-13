/// <reference types="cypress" />

// Stub fetch object because cypress doesnt handle
// fetch requests
const fetchStub = () => {
	const deferred = {};

	deferred.promise = new Promise((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});
	return deferred;
};

describe('Can sign up', () => {
	beforeEach(function () {
		// register the stub as a local function
		this.fetchStub = fetchStub();
	});

	it('should go to sign up form', () => {
		cy.visit('/');
		cy.get('[data-cy=menu]').click();
		cy.get('[data-cy=menu-item]').contains('Sign Up').click();
		cy.url().should('contain', '/signup');
	});

	it('should not progress if no email or password entered', () => {
		cy.visit('/signup');
		cy.get('#Username').type('dummy user');
		cy.get('button[type=submit]').click();
		cy.url().should('eq', Cypress.config().baseUrl + '/signup');
	});

	it('should add user', function () {
		const testToken =
			'$2a$10$.4XK5WMk1dTdJIpanxAEZOzmZLArCgWzeTTBSDCNqmjtFP/GHvNce';
		// set the reponse we want from fetch
		this.fetchStub.resolve({
			json() {
				return { token: testToken };
			},
			ok: true,
		});

		cy.visit('/signup');
		cy.get('#Username').type('dummy user');
		cy.get('#email').type('dummy@email.com');
		cy.get('#password').type('dummypassword');

		// get the window object and exchange fetch
		// with our custom stub fetchStub
		cy.window().then(function (win) {
			cy.stub(win, 'fetch')
				.withArgs('https://apibechdel.herokuapp.com/signup')
				.as('fetchSignup')
				.returns(this.fetchStub.promise);
		});
		cy.get('button[type=submit]').click();
		cy.get('@fetchSignup').should('be.calledOnce');
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

		cy.visit('/signup');
		cy.get('#Username').type('dummy user');
		cy.get('#email').type('dummy@email.com');
		cy.get('#password').type('dummypassword');

		// get the window object and exchange fetch
		// with our custom stub fetchStub
		cy.window().then(function (win) {
			cy.stub(win, 'fetch')
				.withArgs('https://apibechdel.herokuapp.com/signup')
				.as('fetchSignup')
				.returns(this.fetchStub.promise);
		});
		cy.get('button[type=submit]').click();
		cy.get('@fetchSignup').should('be.calledOnce');
		cy.window().then((win) => {
			cy.expect(win.localStorage.getItem('access token')).to.eq(null);
		});
	});
});
