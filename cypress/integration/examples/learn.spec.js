it('Home button redirects to homepage', () => {
	cy.visit('/about');
	cy.get('.MuiToolbar-root');
	cy.contains('Bechdel & Beyond').click();
	cy.url().should('include', '/');
});
