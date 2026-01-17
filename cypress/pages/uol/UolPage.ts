export class UolPage {
    public visit() {
        cy.visit(Cypress.env('uolUrl'))
        return this
    }

    public scrollToFooter() {
        cy.get('footer').scrollIntoView()
        return this
    }

    public selectFooterOptions(sectionTitle: string, option: string) {
        this.footerColumns(sectionTitle)
            .contains('a', option)
            .click()

        return this
    }

    private footerColumns(title: string) {
        return cy.get('footer').contains('.showcaseColumns', title);
    }
}