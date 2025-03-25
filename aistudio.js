describe('My First Test Suite', function() {

it ("create new trans", function(){
  /* ==== Generated with Cypress Studio ==== */
  //below code belongs to login page
  cy.visit('https://rahulshettyacademy.com/client');
  cy.get('#userEmail').clear('si');
  cy.get('#userEmail').type('sidchak@test.com');
  cy.get('#userPassword').clear('n');
  cy.get('#userPassword').type('nonom');
  cy.get('#login').click();
  cy.get('#login').click();
  cy.get('.forgot-password-link').should('be.visible');
  cy.get('.login-wrapper-footer-text').should('have.attr', 'style', 'cursor: pointer;');
  /* ==== End Cypress Studio ==== */
});

});