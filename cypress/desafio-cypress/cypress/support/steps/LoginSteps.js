/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("Tenho cadastro no site", () => {
	return true;
});

Given("Estou na página de Login", () => {
    loginPage.acessarPaginaDeLogin()
});

When(/^Realizo Login com "([^"]*)" e "([^"]*)" validos$/, (email,senha) => {
	loginPage.fecharCookie()
    loginPage.preencherEmail(email)
    loginPage.preencherSenha(senha)
    loginPage.clicarNoBotaoEntrar()
});


Then(/^A página de Dados Pessoais deve ser exibida e o email "([^"]*)" deve ser mostrado$/, (email) => {
    expect(loginPage.verificarLoginRealizado()).to.be.true
    loginPage.verificarEmailAposLogin().should('have.text', 'fernandopinheiro03@gmail.com')
});

