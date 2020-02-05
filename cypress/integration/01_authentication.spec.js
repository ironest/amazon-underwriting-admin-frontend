describe('Authentication Tests Suite', () => {

  it('Landing page succesfully loads', () => {

    cy.visit(`http://localhost:${Cypress.env('PORT') }`)

  })

  it('The loaded page is the actual login page', () => {

    cy.get('h1').should('contain', 'Login Page')

  })
  
  it('The email field is freely editable', () => {

    cy.get('input[type="email"]').type('fake@email.com').should('have.value', 'fake@email.com')
  
  })

  it('Password must be provided when authenticating', () => {

    cy.get('input[type="submit"]').click()

    cy.get('.row .container p').should('contain', '"password" is not allowed to be empty')
  
  })

  it('The password field is freely editable', () => {

    cy.get('input[type="email"]').clear()
    cy.get('input[type="password"]').type('password').should('have.value', 'password')

  })

  it('email must be provided when authenticating', () => {

    cy.get('input[type="submit"]').click()
    
    cy.get('.row .container p').should('contain', '"email" is not allowed to be empty')
  
  })

  it('Veryfing Wrong username or password', () => {

    cy.get('input[type="email"]').clear().type('fake@email.com')
    cy.get('input[type="password"]').clear().type('password')

    cy.get('input[type="submit"]').click()
    
    cy.get('.row .container p').should('contain', 'Wrong username or password')
  
  })

  it('Succesfull authentication', () => {

    cy.get('input[type="email"]').clear().type('user@domain.com')
    cy.get('input[type="password"]').clear().type('password')

    cy.get('input[type="submit"]').click()
    
    cy.url().should('eq', `http://localhost:${Cypress.env('PORT') }/childcare`)
  
  })

})
