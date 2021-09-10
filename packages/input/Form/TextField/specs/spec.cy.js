context('Textfield: Base', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('storybookBaseUrl')}input-form-text-field--all-styles`)
  })

  it('Should render typed text', () => {
    cy.get('[data-cy="default_textfield"]').type('hello')
    cy.get('[data-cy="default_textfield"]').should('value', 'hello')
  })

  it('Should clear input if when clear buton clicked', () => {
    cy.get('[data-cy="default_textfield"]').type('hello')
    cy.get('[data-cy="default_textfield"]').should('value', 'hello')
    cy.get('[data-cy="textfield_closeIcon"]').first().click()
    cy.get('[data-cy="default_textfield"]').should('value', '')
  })
})
