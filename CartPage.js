import ConfirmationPage from '../../support/pageObjects/ConfirmationPage'
class CartPage {
    checkoutItems(){
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()//returning new page object

    }
    sumOfProducts()
    {
        let sum = 0

        return cy.get('tr td:nth-child(4) strong') //return to parent to use in test
            .each($e1 => {
                //₹. 65000
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount //65000 + 1000000
            }).then(() => {
                return sum //return sum to use in test
            })
    }

}
export default CartPage;