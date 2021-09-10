//

// context('Form: Full Example', () => {
//   beforeEach(() => {
//     cy.visit(input-form--full-example)
//   })

//   it('if form has an invalid input, submit error function', function() {
//     cy.get('[data-cy="form_result"]').contains('Result: ')
//     cy.get('[data-cy="form_submit_button"]').click()
//     cy.get('[data-cy="form_result"]').contains('Result: fail')
//   })

//   it('if form has no invalid input, submit success function', function() {
//     cy.get('[data-cy="form_result"]').contains('Result: ')
//     cy.get('[data-cy="textfield1"]').type('hello')
//     cy.get('[data-cy="form_submit_button"]').click()
//     cy.get('[data-cy="form_result"]').contains('Result: success')
//   })
// })
