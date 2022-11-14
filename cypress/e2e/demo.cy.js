describe("My first test suite", function()
{

    it("My first test cases", function(){

        cy.visit("https://www.amazon.com/")
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type("demo@gmail.com")
        cy.get('[type="submit"]').click()
        
    })

})