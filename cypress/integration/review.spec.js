/// <reference types="cypress" />

// Stub fetch object because cypress doesnt handle
// fetch requests
import { fetchStub } from '../support/helpers';

describe('Can give review', () => {
	const testToken =
		'$2a$10$.4XK5WMk1dTdJIpanxAEZOzmZLArCgWzeTTBSDCNqmjtFP/GHvNce';
	beforeEach(function () {
		// register the stub as a local function
		// 'this.' does not work within arrow functions
		this.fetchStub = fetchStub();

		cy.window().then((win) => {
			win.localStorage.setItem('access token', testToken);
		});
	});
	beforeEach(() => {});

	it('should take to movie review form', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[data-cy=review-movie]').contains('titanic');
		cy.get('[data-cy=review-card]').should('contain.attr', 'title');
	});

	it('should be able to answer first question', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[data-cy=review-question]').contains(
			'Are there at least 2 women ?',
		);
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-back]').should('be.disabled');
	});

	it('should be able to answer second question', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-question]').contains(
			'Do they talk to each other ?',
		);
		cy.get('[data-cy=review-back]').should('be.enabled');
	});

	it('should be able to answer third question', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-question]').contains(
			'Do they talk about something other than men ?',
		);
		cy.get('[data-cy=review-back]').should('be.enabled');
	});

	it('should be able to answer final question', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-question]').contains(
			'How satisfied were you with the gender representation?',
		);
		cy.get('[data-cy=review-back]').should('be.enabled');
		cy.get('[data-cy=review-next]').should('be.disabled');
	});

	it('should submit review', function () {
		this.fetchStub.resolve({
			json() {
				return { response: 'success' };
			},
			ok: false,
		});

		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[type="radio"]').first().check();
		cy.get('[data-cy=review-next]').click();
		cy.get('[type="radio"]').first().check();
		cy.get('#outlined-basic').type('Horrible film');

		cy.window().then(function (win) {
			cy.stub(win, 'fetch')
				.withArgs('https://apibechdel.herokuapp.com/film/titanic/reviews')
				.as('fetchReview')
				.returns(this.fetchStub.promise);
		});
		cy.get('button[type=submit]').click();
		cy.get('@fetchReview').should('be.calledOnce');
		cy.url().should('contain', '/titanic');
	});

	it('should show logout button in the menu', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=menu]').click();
		cy.get('[data-cy=menu-item]').contains('Log out').click();
		cy.url().should('eq', Cypress.config().baseUrl + '/');
		cy.get('[data-cy=menu]').click();
		cy.get('[data-cy=menu-item]').contains('Login');
	});
});
