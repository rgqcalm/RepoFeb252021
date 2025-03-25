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
// Cypress.Commands.add("login", (email, password) => { ... })
//custom commands we can create in cypress, submitFormDetails reusable function
//cy.customocmmandname, some piece of code is used repeatedly, we can create custom command
Cypress.Commands.add('submitFormDetails',()=>
{
        cy.get("#country").type("India")
        cy.get(".suggestions ul li a").click()
        cy.get(".btn-success").click()
})




