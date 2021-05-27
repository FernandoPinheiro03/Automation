/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements

import SmartphoneElements from '../elements/SmartphoneElements'
const smartphoneElements = new SmartphoneElements


const url = Cypress.config("baseUrl")


class HomePage {

    acessarSite() {
        cy.visit(url)
    }

    acessarPaginaLogin() {
        cy.get(homeElements.iconeLogin()).click()
    }

    abrirMenuSmartphones(){
        cy.scrollTo('center')
        cy.get(homeElements.menuSmartphones(), { timeout: 10000 }).should('exist');
        cy.get(homeElements.menuSmartphones()).click()
        cy.wait(5000)
        expect(cy.get(smartphoneElements.primeiroProduto())).to.exist
        cy.wait(1000)
    }

}
export default HomePage;