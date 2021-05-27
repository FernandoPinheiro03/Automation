/// <reference types="Cypress" />

import HeaderElements from '../elements/HeaderElements'
const headerElements = new HeaderElements

class HeaderPage {

    clicarMenuSamsung() {
        cy.get(headerElements.menuSamsung()).click()
    }

}

export default HeaderPage;