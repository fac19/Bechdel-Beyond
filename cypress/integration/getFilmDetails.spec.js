/// <reference types="cypress" />

//As a user I want to click on a movie to see extra film info
describe('Get film details', () => {
	before(() => {
		cy.visit('/');
		cy.get('[data-cy=search]').type('titanic');
		cy.get('[data-cy=movie-card]').click({ force: true });
	});

	// As a user I want to be able to see which films pass the Bechdel Test
	it('shows film scores', () => {
		cy.get('[data-cy=metascore-score]').contains('Metascore');
		cy.get('[data-cy=bechdel-score]').contains('Bechdel');
		cy.get('[data-cy=beyond-score]').contains('Beyond');
	});

	// As a user I want to see a good synopsis on a film page
	it('shows film synopsis', () => {
		cy.get('[data-cy=synopsis]')
			.should('contain', 'Synopsis')
			.and('be.visible');
	});

	it('shows gender data of cast and crew', () => {
		cy.get('[data-cy=cast]').children().should('have.length', 4);
		cy.get('[data-cy=cast]').should('contain', 'Cast').and('be.visible');

		cy.get('[data-cy=crew]').children().should('have.length', 4);
		cy.get('[data-cy=crew]').should('contain', 'Crew').and('be.visible');
	});
});
