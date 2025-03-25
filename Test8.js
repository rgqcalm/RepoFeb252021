/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('Frames test', function() 
{

it('My FirstTest case',function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.frameLoaded('#courses-iframe')
cy.iframe().find("a[href*='mentorship']").eq(0).click()
//cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',3)
cy.iframe().find("h1[class*='pricing-title']").eq(1).should('have.text','Master Selenium Automation in simple Python Language')


})
})




























