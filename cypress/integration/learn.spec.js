/// <reference types="cypress" />

// As a user I want to know what the Bechdel test is
describe('Learn what the Bechdel test is', () => {
	before(() => {
		cy.visit('/');
		cy.get('[data-cy=menu]').click();
		cy.get('[data-cy=menu-item]').contains('About').click();
	});

	it('goes to about page and finds app info text', () => {
		cy.get('[data-cy=app-info]').should('be.visible');
	});

	it('How it works CTA takes to bechdel endpoint', () => {
		cy.get('[data-cy=bechdel-test]').click();
		cy.url().should('include', '/bechdel');
	});

	it('Home button redirects to homepage', () => {
		cy.get('[data-cy=toolbar]');
		cy.contains('Bechdel & Beyond').click();
		cy.url().should('include', '/');
	});
});
