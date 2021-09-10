context('Overlay', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('storybookBaseUrl')}utils-overlay--example`)
  })

  it('shows on button click & hides on overlay click', () => {
    cy.get('[data-cy="overlay"]').should('not.be.visible')
    cy.get('button[data-cy="show-button"]').click()
    cy.get('[data-cy="overlay"]').should('be.visible')
    cy.get('[data-cy="overlay"]').click()
    cy.get('[data-cy="overlay"]').should('not.be.visible')
  })
})
