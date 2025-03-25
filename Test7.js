describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

       cy.get("#opentab").invoke('removeAttr','target').click();

       cy.origin("https://www.qaclickacademy.com",()=> 
       {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
    })

        //Assignment
        // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        // cy.get(".blinkingText").invoke('removeAttr','target').click();
        // cy.get("h1").should('contain','Documents request');

        // cy.get('#opentab').then(function(el)
        // {

        //     const url=el.prop('href');
        //     //cy.log(url);
        //     cy.visit(url);
        // cy.origin("https://www.qaclickacademy.com",()=> 
        // {
        //     cy.get("#navbarSupportedContent a[href*='videos']").click();
        //     cy.get("h1").should('contain','Videos');
        // }

        // }

    });

});








  