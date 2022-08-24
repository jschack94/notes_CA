// https://docs.cypress.io/api/table-of-contents

describe('Checks for add new note button', () => {
    it('Visits the app root url', () => {
      cy.visit('/')
      cy.contains('button', 'Add New Note')
    })
  })
  