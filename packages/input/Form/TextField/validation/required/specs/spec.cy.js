context('Textfield Validation: Required', () => {
  beforeEach(() => {
    cy.visit(
      `${Cypress.env('storybookBaseUrl')}input-form-textfield-validation--required`,
    )
  })

  it('On initial Load input field should not show error message but if submitted it will show error messages', () => {
    cy.get('[data-cy="textfield_errorMessages"]').should('not.be.visible')
    cy.get('button[data-cy="textfield_submitButton"]').click()
    cy.get('[data-cy="textfield_errorMessages"]').should('be.visible')
  })

  it('On input change, if value is empty show error', () => {
    cy.get('[data-cy="textfield_errorMessages"]').should('not.be.visible')
    cy.get('[data-cy="exampleField1"]').type('hello')
    cy.get('[data-cy="textfield_errorMessages"]').should('not.be.visible')
    cy.get('[data-cy="exampleField1"]').clear()
    cy.get('[data-cy="textfield_errorMessages"]').should('be.visible')
  })
})
