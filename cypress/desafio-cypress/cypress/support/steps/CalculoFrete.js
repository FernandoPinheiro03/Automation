/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage
import HeaderPage from '../pageobjects/HeaderPage'
const headerPage = new HeaderPage
import HomePage from "../pageobjects/HomePage";
const homePage = new HomePage
import SmartphonePage from "../pageobjects/SmartphonePage";
const smartphonePage = new SmartphonePage
import PDPpage from "../pageobjects/PDPpage";
const pdpPage = new PDPpage

Given(/^Estou logado no site$/, () => {
    const email = "fernandopinheiro03@gmail.com"
    const senha = 'Pinheirolima10'
    loginPage.acessarPaginaDeLogin()
    loginPage.fecharCookie()
    loginPage.preencherEmail(email)
    loginPage.preencherSenha(senha)
    loginPage.clicarNoBotaoEntrar()   
    loginPage.verificarLoginRealizado()
});

When(/^Acesso a página do produto$/, () => {
	headerPage.clicarMenuSamsung()
    homePage.abrirMenuSmartphones()
    smartphonePage.abrirPDPproduto()
});

When(/^Preencho o codigo postal "([^"]*)"$/, (codigoPostal) => {
	codigoPostal = '61923-075'
    pdpPage.preencherCodigoPostal(codigoPostal)
    pdpPage.clicarCalcular()
});


Then(/^Deve ser exibido a quantidade de dias úteis e o valor da entrega$/, () => {
	expect( pdpPage.verificarTabelaAposCalcularFrete()).to.be.true
    pdpPage.verificarTipoDeEntrega().should('have.text', 'Normal')
    pdpPage.verificarDiasParaEntrega().should('have.text', 'Em até 7 dias úteis')
    pdpPage.verificarValorDoValor().should('have.text', 'Grátis')
});

