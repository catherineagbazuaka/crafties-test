// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('LoadPage', ()=>{
    cy.visit('/')
})

Cypress.Commands.add('InsertUsername', ()=>{
    cy.fixture("elements").then((el)=>{
        cy.get(el.usernameField).should('exist').fill(el.username)
    })
})

Cypress.Commands.add('InsertPassword', ()=>{
    cy.fixture("elements").then((el)=>{
        cy.get(el.passwordField).should('exist').fill(el.password)
    })
})

Cypress.Commands.add('ClickLogin', ()=>{
    cy.fixture("elements").then((el)=>{
        cy.get(el.loginButton).should('exist').click()
    })
})

Cypress.Commands.add('VerifyProduct', ()=>{
    cy.fixture("elements").then((el)=>{
        cy.get(el.productTitle).should('exist').and('contain', 'Products')
    })
})