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

	it('shows film poster', () => {
		cy.get('[data-cy=movie-poster]')
			.should('have.attr', 'title', 'titanic')
			.and('be.visible');
	});

	it('shows credits info', () => {
		cy.get('[data-cy=credits]')
			.children()
			.should('have.length', 5)
			.and('be.visible');

		cy.get('[data-cy=credits]').children().contains('titanic');

		cy.get('[data-cy=credits]').children().contains('Director: James Cameron');

		cy.get('[data-cy=credits]').children().contains('Producer: Jon Landau');

		cy.get('[data-cy=credits]').children().contains('USA, 1997');

		cy.get('[data-cy=credits]').children().contains('194 min');
	});

	// As a user I want to see a good synopsis on a film page
	it('shows film synopsis', () => {
		cy.get('[data-cy=synopsis]')
			.should(
				'contain',
				'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
			)
			.and('be.visible');
	});

	it('shows gender data of cast and crew', () => {
		cy.get('[data-cy=cast]').children().should('have.length', 4);
		cy.get('[data-cy=cast]').should('contain', 'Cast').and('be.visible');

		cy.get('[data-cy=crew]').children().should('have.length', 4);
		cy.get('[data-cy=crew]').should('contain', 'Crew').and('be.visible');
	});

	it('Home button redirects to homepage', () => {
		cy.get('[data-cy=toolbar]');
		cy.contains('Bechdel & Beyond').click();
		cy.url().should('include', '/');
	});
});
