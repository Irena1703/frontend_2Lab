
describe("Test Home", () => {
    it("Visit the app root", () => {
        cy.visit('/')
        cy.contains('h2', 'Home page')
    })
})