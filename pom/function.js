class test{
    setname(username){
        cy.get("[name='username']").type(username)
    }
    setpwd(password){
        cy.get("[type='password']").type(password)
    }
    buttonclick(){
        cy.get("[type='submit']").click()
    }
    check(text){
        cy.get(".oxd-topbar-header-breadcrumb").should("have.text", text)
    }
}

export default test;