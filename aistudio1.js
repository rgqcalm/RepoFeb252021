describe('My First Test Suite', function() {

    it ("create new trans", function(){
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('a > .btn').click();
        cy.get(':nth-child(3) > .theme-btn').click();
        cy.get(':nth-child(3) > .theme-btn').click();
        /* ==== End Cypress Studio ==== */
    });

});