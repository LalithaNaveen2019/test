import test from "../pom/function";
let newfunction = new test();
let userdata;
beforeEach(()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.fixture("fixturedata").then((data)=>{
        userdata = data;
    })
})

describe("pomtest",()=>{
    it("pomtestcase",()=>{
        newfunction.setname(userdata.name);
        newfunction.setpwd(userdata.password);
        newfunction.buttonclick();
        newfunction.check(userdata.checktext)
    })
})