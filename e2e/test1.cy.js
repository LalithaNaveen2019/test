describe("Google Dropdown", () => {
    beforeEach(() => {
         cy.visit("https://datatables.net/examples/styling/bootstrap4");
    })

    it("table",()=>{
     let pages = 10;
     for (let p=1; p<=pages; p++)
          {
               cy.log("pagination number is ....", p );
               cy.get(".pagination>li:nth-child("+p+")").click();
               cy.get("#example>tbody>tr:nth-child(4)").each(($row)=>{
                    cy.wrap($row).within(()=>{
                         cy.get("td").each(($td)=>{
                              cy.log($td.text())
                         })
                    })
               })

          }

          cy.viewport('macbook-15')
          cy.wait(200)
          cy.viewport('macbook-13')
          cy.wait(200)
          cy.viewport('macbook-11')
          cy.wait(200)
          cy.viewport('ipad-2')
          cy.wait(200)
          cy.viewport('ipad-mini')
          cy.wait(200)
          cy.viewport('iphone-6+')
          cy.wait(200)
          cy.viewport('iphone-6')
          cy.wait(200)
          cy.viewport('iphone-5')
          cy.wait(200)
          cy.viewport('iphone-4')
          cy.wait(200)
          cy.viewport('iphone-3')
          cy.wait(200)
    })

        
})