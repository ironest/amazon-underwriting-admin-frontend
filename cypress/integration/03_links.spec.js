describe('Links Tests Suite', () => {

  before(function () {

    cy.visit(`http://localhost:${Cypress.env('PORT') }`)

    cy.get('input[type="email"]').clear().type('user@domain.com')
    cy.get('input[type="password"]').clear().type('password')

    cy.get('input[type="submit"]').click()

  })

  it('The loaded page is the actual Childcare page', () => {

    cy.get('h1').should('contain', 'Childcare')

  })

  it('Deletion of a document', () => {

    cy.get('.section-record:nth-of-type(1) .link-record').should('have.length', 5)
    
    cy.get('.section-record:nth-of-type(1) .link-record:nth-of-type(1) li:nth-of-type(4) a').click()

    cy.get('.section-record:nth-of-type(1) .link-record').should('have.length', 4)

  })

  it('Accessing Edit page', () => {

    cy.get('.section-record:nth-of-type(1) .link-record:nth-of-type(1) li:nth-of-type(3) a').click()

    cy.get('h1').should('contain', 'Edit Document')

  })

  it('Editing a document name', () => {

    cy.get('input[name="fileName"]').clear().type('This is a test').should('have.value', 'This is a test')

    cy.get('input[type="submit"]').click()

    cy.get('.section-record:nth-of-type(1) .link-record:nth-of-type(1) span').should('contain', 'This is a test')

  })

})