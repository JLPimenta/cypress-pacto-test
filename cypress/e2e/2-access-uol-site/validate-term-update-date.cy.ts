import {UolPage} from "../../pages/uol/UolPage";

describe('Validar termo de segurança da UOL', () => {

    it('Deve verificar a data de atualização do Termo de Segurança', () => {
        const uolPage = new UolPage()

        uolPage
            .visit()
            .scrollToFooter()
            .selectFooterOptions("Sobre o UOL", "Segurança e privacidade")

        cy.origin('https://sobreuol.noticias.uol.com.br/**', () => {
            const securityUpdateDate = '21 de julho de 2021'
            const pageTerm = 'Normas de Segurança e Privacidade'

            cy.get('h1').contains(pageTerm).should('be.visible')
            cy.scrollTo('bottom')
            cy.contains(securityUpdateDate).should('be.visible')
        })
    });
});