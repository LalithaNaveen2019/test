describe("hover option",()=>{
    it("hover",()=>{
        cy.visit("https://www.grtjewels.com/")
        cy.get(".navigation>ul>li:nth-child(8)").trigger("mouseover")
       
       
    })
})