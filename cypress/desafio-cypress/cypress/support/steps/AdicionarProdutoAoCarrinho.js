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
import MeuCarrinhoPage from "../pageobjects/MeuCarrinhopage";
const meuCarrinhoPage = new MeuCarrinhoPage


Given(/^Estou na página do Produto$/, () => {
	const email = "fernandopinheiro03@gmail.com"
    const senha = 'Pinheirolima10'
    loginPage.acessarPaginaDeLogin()
    loginPage.fecharCookie()
    loginPage.preencherEmail(email)
    loginPage.preencherSenha(senha)
    loginPage.clicarNoBotaoEntrar()   
    loginPage.verificarLoginRealizado()
    headerPage.clicarMenuSamsung()
    homePage.abrirMenuSmartphones()
    smartphonePage.abrirPDPproduto()
});

When(/^Seleciono a cor$/, () => {
	pdpPage.selecionarCor()  
});


When(/^Clico em Adicionar ao Carrinho$/, () => {
    pdpPage.clicarEmAdicionarAoCarrinho()
});


Then(/^A Página Meu carrinho deve ser exibida mostrando o Produto Selecionado de acordo com a cor escolhida$/, () => {
	expect(meuCarrinhoPage.validarPaginaMeuCarrinho()).to.be.true
    meuCarrinhoPage.verificarNomeProduto().should('have.text', 'Galaxy A72 Preto 128GB')
    meuCarrinhoPage.verificarCorProduto().should('have.text', ' Preto')
});



