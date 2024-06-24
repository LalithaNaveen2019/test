describe("api testing",()=>{
    it.skip("GET",()=>{
        cy.request({
            method:"GET",
            url:"https://6656cad39f970b3b36c687f3.mockapi.io/employee/1"
        }).then((response)=>{
            expect(response.status).to.eql(200)
            expect(response.body).has.property("name")
            expect(response.body).has.property("id")
            expect(response.body.name).to.eql("lalitha")
        })
    })

    it.skip("POST",()=>{
        cy.request({
            method:"POST",
            url:"https://6656cad39f970b3b36c687f3.mockapi.io/employee",
            body:{
                "name": "naveen",
                "role": "HR",
             }
        }).then((res)=>{
                expect(res.status).to.eql(201)
                expect(res.body).has.property("role")
                expect(res.body.name).to.eql("naveen")
             })
        })

        it.skip("DELETE",()=>{
            cy.request({
                method:"DELETE",
                url:"https://6656cad39f970b3b36c687f3.mockapi.io/employee/13"
            }).then((res)=>{
                expect(res.status).to.eql(200)
            })
        })

        it.skip("PUT",()=>{
            cy.request({
                method:"PUT",
                url:"https://6656cad39f970b3b36c687f3.mockapi.io/employee/10",
                body :{
                    "name" : "pavi"
                }
            }).then((res)=>{
                expect(res.status).to.eql(200)
                expect(res.body.name).to.eql("pavi")
            })
        })


        it("get",()=>{
            cy.request({
                method :"GET",
                url :"https://newsapi.org/v2/everything?domains=wsj.com&apiKey=API_KEY"
            }).then((res)=>{
                expect(res.status).to.eql(401)
                
            })
        })
    })
