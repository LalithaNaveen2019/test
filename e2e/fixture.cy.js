let userdata;
beforeEach("",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.fixture("fixturedata").then((data)=>{
        userdata = data;
    })
})
describe("fixture",()=>{
   
    it("textcase fixture",()=>{
       
        
        cy.fixture("fixturedata").then((data)=>{
            cy.get("[name='username']").type(userdata.name);
            cy.get("[type='password']").type(userdata.password)
            cy.get("[type='submit']").click()
            cy.get(".oxd-topbar-header-breadcrumb").should("have.text", userdata.checktext)
        })
      
    })
})