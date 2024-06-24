describe("custom",()=>{
    it("test",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.typeinput("Admin")
        cy.typepass("admin123");
        cy.submitclick("Login")
       cy.alink("PIM")
       cy.submitclick("Search")
       cy.get("form > .oxd-input-group__label-wrapper:nth-child(1) > .oxd-autocomplete-wrapper > input").type("varinda");
       cy.submitclick("Search")
    })
})