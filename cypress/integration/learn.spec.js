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

	it('"How it works" CTA takes to bechdel endpoint', () => {
		cy.get('[data-cy=bechdel-test]').click();
		cy.url().should('include', '/bechdel');
	});

	it('shows author of Bechdel Test and general idea', () => {
		cy.get('[data-cy=bechdel-setp-one]').should('contain', 'The Bechdel Test');
		cy.get('[data-cy=bechdel-author]').contains('Alison Bechdel');
		cy.get('[data-cy=bechdel-idea]').contains(
			'A way of evaluating whether or not a movie portrays women in a way that is sexist or characterized by gender stereotyping',
		);
	});

	it('Back button to be disabled', () => {
		cy.get('[data-cy=bechdel-back]').should('be.disabled');
	});

	it('Click next to show more information', () => {
		cy.get('[data-cy=bechdel-next]').click();
		cy.get('[data-cy=bechdel-rules]').should('contain', 'A Movie passes if...');
		cy.get('[data-cy=bechdel-one]').should(
			'contain',
			'There are at least 2 women',
		);
		cy.get('[data-cy=bechdel-two]').should(
			'contain',
			'That talk to each other',
		);
		cy.get('[data-cy=bechdel-three]').should(
			'contain',
			'About something other than men.',
		);
	});

	it('Back button to be enabled', () => {
		cy.get('[data-cy=bechdel-back]').should('be.enabled');
	});

	it('Click next to show even more information', () => {
		cy.get('[data-cy=bechdel-next').click();
		cy.get('[data-cy=app-mission]')
			.children()
			.should('have.length', 5)
			.should('contain', 'Help others');
	});

	it('Back button to be enabled', () => {
		cy.get('[data-cy=bechdel-back]').should('be.enabled');
	});

	it('Next button to be disabled', () => {
		cy.get('[data-cy=bechdel-next]').should('be.disabled');
	});

	it('shows button to go back to homepage', () => {
		cy.get('[data-cy=btn-homepage]').click();
		cy.url().should('eq', 'http://localhost:3000/');
	});
});
