/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

const url = Cypress.config("urlAccount")

class LoginPage {

    acessarPaginaDeLogin() {
        cy.visit(url)
    }

    fecharCookie(){
        cy.scrollTo('bottom')
        const iconeFecharCookie = cy.get(loginElements.iconeFecharCookie())
        expect(iconeFecharCookie).to.exist
        iconeFecharCookie.click()
    }

    preencherEmail(email) {
        const campoEmail = cy.get(loginElements.campoEmail())
        campoEmail.click()
        campoEmail.type(email)
    }

    preencherSenha(senha) {
        cy.get(loginElements.campoSenha()).type(senha)
    }

    clicarNoBotaoEntrar() {
        cy.get(loginElements.botaoEntrar()).click()
    }

    verificarLoginRealizado(){
        const labelDadosPessoas = cy.get(loginElements.labelDadosPessoais())
        if (labelDadosPessoas.should('exist')) {
            return true   
        } else return false

    }

    verificarEmailAposLogin(email){
        const emailDadosPessoais = cy.get(loginElements.emailDadosPessoais())
        return emailDadosPessoais
    }

}
export default LoginPage;