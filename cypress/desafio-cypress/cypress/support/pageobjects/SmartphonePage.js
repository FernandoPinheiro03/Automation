/// <reference types="Cypress" />

import SmartphoneElements from '../elements/SmartphoneElements'
const smartphoneElements = new SmartphoneElements

class SmartphonePage {

    abrirPDPproduto() {
        cy.scrollTo('bottom')
        cy.wait(1000)
        expect(cy.get(smartphoneElements.botaoComprarProduto())).to.exist
        cy.wait(1000)
        cy.get(smartphoneElements.botaoComprarProduto()).click({ multiple: true }) 
    }

}

export default SmartphonePage;