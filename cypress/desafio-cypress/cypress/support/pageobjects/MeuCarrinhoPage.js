/// <reference types="Cypress" />

import MeuCarrinhoElemenents from '../elements/MeuCarrinhoElements'
const meuCarrinhoElements = new MeuCarrinhoElemenents

class MeuCarrinhoPage {

    validarPaginaMeuCarrinho() {
       const validarPaginaMeuCarrinho =  cy.get(meuCarrinhoElements.validarPagina()).click()
       
       if (validarPaginaMeuCarrinho.should('exist')) {
           return true;
       } else {
           return false;
       } 
    }

    verificarNomeProduto(nomeProduto){
        cy.wait(2500)
        nomeProduto = cy.get(meuCarrinhoElements.nomeProduto())
        return nomeProduto
    }

    verificarCorProduto(corProduto){
        corProduto = cy.get(meuCarrinhoElements.corProduto())
        return corProduto
    }

}

export default MeuCarrinhoPage;