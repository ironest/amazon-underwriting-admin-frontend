describe('Personal Accident Tests Suite', () => {

  before(function () {

    cy.visit(`http://localhost:${Cypress.env('PORT') }`)

    cy.get('input[type="email"]').clear().type('user@domain.com')
    cy.get('input[type="password"]').clear().type('password')

    cy.get('input[type="submit"]').click()

    cy.wait(1000);

    cy.get('.nav-div a:nth-of-type(4)').click()

  })

  it('The loaded page is the actual Personal Accident page', () => {

    cy.get('h1').should('contain', 'Personal Accident')

  })

  it('Deletion of a document', () => {

    cy.get('.section-record:nth-of-type(3) .link-record').should('have.length', 3)
    
    cy.get('.section-record:nth-of-type(3) .link-record:nth-of-type(1) li:nth-of-type(4) a').click()

    cy.get('.section-record:nth-of-type(3) .link-record').should('have.length', 2)

  })

  it('Accessing Edit page', () => {

    cy.get('.section-record:nth-of-type(3) .link-record:nth-of-type(1) li:nth-of-type(3) a').click()

    cy.get('h1').should('contain', 'Edit Document')

  })

  it('Editing a document name', () => {

    cy.get('input[name="fileName"]').clear().type('This is a test').should('have.value', 'This is a test')

    cy.get('input[type="submit"]').click()

    cy.get('.section-record:nth-of-type(3) .link-record:nth-of-type(1) span').should('contain', 'This is a test')

  })

})