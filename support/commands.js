/// <reference types="Cypress" />

Cypress.Commands.add("alink",(text)=>{
    cy.get("a").contains(text).click();
})
Cypress.Commands.add("typeinput",(text)=>{
    cy.get("[name ='username']").type(text)
})
Cypress.Commands.add("typepass",(text)=>{
    cy.get("[type='password']").type(text)
})
Cypress.Commands.add("submitclick",(text)=>{
    cy.get("[type='submit']").contains(text).click()
})