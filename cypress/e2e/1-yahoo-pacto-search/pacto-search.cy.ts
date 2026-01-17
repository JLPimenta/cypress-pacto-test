describe('Busca e validação por Pacto Soluções', () => {
    const siteName = 'pacto soluções'

    context('Yahoo', () => {
        it('Deve buscar "Pacto Soluções"', () => {
            cy.intercept(Cypress.env('yahooUrl') + '/search**').as('search')

            cy.visit(Cypress.env('yahooUrl'))
            cy.get('#yschsp').type(siteName)
            cy.get(".sa-item").contains(siteName).click()

            cy.wait('@search').then(interception => {
                expect(interception.response?.statusCode).to.eq(200)
                cy.contains(Cypress.env('pactoUrl'))
            })
        });
    })
});