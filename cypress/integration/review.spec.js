/// <reference types="cypress" />

describe('', () => {
	const testToken =
		'$2a$10$.4XK5WMk1dTdJIpanxAEZOzmZLArCgWzeTTBSDCNqmjtFP/GHvNce';

	beforeEach(() => {
		cy.window().then((win) => {
			win.localStorage.setItem('access token', testToken);
		});
	});

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
		cy.get('[data-cy=review-back]').should('be.disabled');
	});

	it('should be able to answer second question', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-question]').contains(
			'Do they talk to each other ?',
		);
	});

	it('should be able to answer third question', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-question]').contains(
			'Do they talk about something other than men ?',
		);
	});

	it('should be able to answer final question', () => {
		cy.visit('/film/titanic');
		cy.get('[data-cy=give-review]').contains('Review').click();
		cy.url().should('contain', 'create-review/titanic');
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-next]').click();
		cy.get('[data-cy=review-question]').contains(
			'How satisfied were you with the gender representation?',
		);
		cy.get('[data-cy=review-next]').should('be.disabled');
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
