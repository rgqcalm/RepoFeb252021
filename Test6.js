/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('div.mouse-hover-content').invoke('show') //show hidden elements jquery method
cy.contains('Top').click({force: true})//click on hidden elements
cy.url().should('include','top')
})


})




























