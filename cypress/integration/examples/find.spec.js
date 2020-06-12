describe('Find films and search on homepage', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('successfully loads lots of films at once', () => {
		cy.get('[data-cy="movie-card-container"]')
			.find('[data-cy="movie-card"]')
			.should('have.length', 18);
	});

	it('should type into search bar and find film', () => {
		cy.get('[data-cy=search]').type('titanic').should('have.value', 'titanic');
		cy.get('[data-cy=card-title]').contains('titanic');
	});

	it('should type into search bar and get message back if film not found', () => {
		cy.get('[data-cy=search]')
			.type('parasite')
			.should('have.value', 'parasite');
		cy.get('[data-cy=not-found]').contains('No movies from your search');
	});
});

describe('Search films using keyboard', () => {});
