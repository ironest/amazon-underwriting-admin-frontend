describe('Navbar menu has proper routing', () => {

  before(function () {

    cy.visit(`http://localhost:${Cypress.env('PORT') }`)

    cy.get('input[type="email"]').clear().type('user@domain.com')
    cy.get('input[type="password"]').clear().type('password')

    cy.get('input[type="submit"]').click()

  })

  it('Checking Childcare link goes the the right page', () => {

    cy.get('.nav-div a:nth-of-type(2)').click()

    cy.get('h1').should('contain', 'Childcare')

  })

  it('Checking HHB link goes the the right page', () => {

    cy.get('.nav-div a:nth-of-type(3)').click()

    cy.get('h1').should('contain', 'Home Based Businesses')

  })

  it('Checking Personal Accident link goes the the right page', () => {

    cy.get('.nav-div a:nth-of-type(4)').click()

    cy.get('h1').should('contain', 'Personal Accident')

  })

  it('Checking Business Info link goes the the right page', () => {

    cy.get('.nav-div a:nth-of-type(5)').click()

    cy.get('h1').should('contain', 'Business Info')

  })

  it('Checking Newsletter link goes the the right page', () => {

    cy.get('.nav-div a:nth-of-type(6)').click()

    cy.get('h1').should('contain', 'Newsletter')

  })

})
