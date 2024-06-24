describe("screenshot",()=>{
    it("bugs screenshot",()=>{
        cy.visit("https://www.w3schools.com/html/")
        cy.get("#navbtn_exercises").click();
        cy.get("#exercises_html_css_links_list>div:nth-child(3)>a:nth-child(3)").click()
        cy.wait(5000)
        cy.get('.ga-nav.active').screenshot()
    })
})