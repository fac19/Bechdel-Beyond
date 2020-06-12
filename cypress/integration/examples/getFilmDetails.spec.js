describe('Get film details', () => {
	before(() => {
		cy.visit('/');
		cy.get('[data-cy=search]').type('titanic');
		cy.get('[data-cy=movie-card]').click({ force: true });
	});

	it('shows film scores', () => {
		cy.get('[data-cy=metascore-score]').contains('Metascore');
		cy.get('[data-cy=bechdel-score]').contains('Bechdel');
		cy.get('[data-cy=beyond-score]').contains('Beyond');
	});

	it('shows film synopsis', () => {
		cy.get('[data-cy=synopsis]').contains('Synopsis');
	});

	it('shows gender data of cast and crew', () => {
		cy.get('[data-cy=cast]').children().should('have.length', 4);
		cy.get('[data-cy=cast]').contains('Cast');

		cy.get('[data-cy=crew]').children().should('have.length', 4);
		cy.get('[data-cy=crew]').contains('Crew');
	});
});
