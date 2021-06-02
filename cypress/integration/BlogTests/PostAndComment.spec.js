describe('Cypress Tests',()=>{
    it('Create articles',()=>{
        cy.fixture('blog').then(data=>{
            cy.log('Go home')
            cy.visit(data.main_url)

            cy.log("Go to register")
            cy.visit(data.main_url+'#/register')
            cy.wait(500)

            cy.log("Enter required fields")
            cy.get('input[placeholder="Name"]')
                .type(data.login)

            cy.get('input[placeholder="Email address"]')
                .type(data.email)
                
            cy.get('input[placeholder="Create password"]')
                .type(data.password)
            
            cy.get('input[placeholder="Repeat password"]')
                .type(data.password)

            cy.log('click register')
            cy.get('button[type="submit"]')
                .click()

            cy.wait(500)

            cy.log('Redirected to login page and login')
            cy.get('input[type="email"]')
                .type(data.email)

            cy.get('input[type="password"]')
                .type(data.password)

            cy.get('button[type="submit"]')
                .click()

            cy.log('Add article')
            cy.get('button[id="add"]')
                .click()

            cy.wait(500)
            
            cy.log('Create new article')
            cy.get('#item1')
                .type(data.article_title)

            cy.get('#item2')
                .type(data.article_text)

                cy.get('button[id="add"]')
                .click()
            
            cy.wait(500)
            cy.get('button[data-target="#comments"]')
                .click()

            cy.log('Add comment')
            cy.get('button[id="add"]')
                .click()
            cy.get('#item')
             .type(data.comment)
            
             cy.get('button[id="addComment"]')
                .click()

            cy.get('tr').should('be.visible')
        })
    })

});