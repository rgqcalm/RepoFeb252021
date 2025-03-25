
describe('Calendar test',()=>
{

    it('Verify date selection',()=>{

        const monthNumber = "6";
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber,date,year];

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.wait(5000)
        cy.get(".react-date-picker__inputGroup").click();//click on date picker

        cy.get(".react-calendar__navigation__label").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.contains("button",year).click();//click button with text 2027, use partial selector
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();//start from 0 index, typecast Number
        cy.contains("abbr",date).click();

        //Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);// invoke to get value attribute of input field
        }

        // 
        
        
     
        
             














    })







})