context('Homepage', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should show loads of films at once', () => {});

	it('should type into search bar and find film', () => {
		cy.get('[data-cy=search]').type('titanic').should('have.value', 'titanic');

		cy.get('[data-cy=card-title]').contains('titanic');
	});
});
