describe('Test Blog page', () => {
  beforeEach(() => {
    cy.visit('/blog');
  });

  it('checks if blog posts are coming', () => {
    cy.get('[data-cy=start-reading]').click();

    cy.get('[data-cy=input-value]').type('Next.js');
  });
});
