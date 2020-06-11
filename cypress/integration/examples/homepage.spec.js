/// <reference types="Cypress" />

it('Home button redirects to homepage', () => {
	cy.visit('/about');
	cy.get('.MuiToolbar-root');
	cy.contains('Bechdel & Beyond').click();
	cy.url().should('include', '/');
});

context('Homepage', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('should type into search bar', () => {
		cy.get('.MuiInputBase-input')
			.type('titanic')
			.should('have.value', 'titanic');

		cy.get('.makeStyles-title-127').contains('titanic');
	});
});
