/// <reference types="Cypress" />

import PDPelements from '../elements/PDPElements'
const pdpElements = new PDPelements

class PDPpage {

    preencherCodigoPostal(codigoPostal) { 
        cy.scrollTo('center')
        cy.wait(3000)
        expect(cy.get(pdpElements.campoCodigoPostal())).to.exist      
        cy.get(pdpElements.campoCodigoPostal()).type(codigoPostal, {force: true})
    }

    clicarCalcular() { 
        cy.get(pdpElements.botaoCalcular()).click({force: true})
    }

    verificarTabelaAposCalcularFrete(){
       const tabelaAposCalcularFrete = cy.get(pdpElements.tabelaAposCalcularFrete())
       if (tabelaAposCalcularFrete.should('exist')) {
           return true
       } 
       else 
       { 
           return false     
       }
    }

    verificarTipoDeEntrega(tipoDeEntrega){
        tipoDeEntrega = cy.get(pdpElements.tipoDeEntrega())
        return tipoDeEntrega
    }

    verificarDiasParaEntrega(diasParaEntrega){
        diasParaEntrega = cy.get(pdpElements.diasParaEntrega())
        return diasParaEntrega
    }

    verificarValorDoValor(valorDoFrete){
        valorDoFrete = cy.get(pdpElements.valorDoFrete())
        return valorDoFrete
    }

    selecionarCor(){
        cy.wait(6000)
        cy.get(pdpElements.corPreto()).click({ multiple: true, force: true })
       
    }

    clicarEmAdicionarAoCarrinho(){
        cy.wait(5000)
        cy.get(pdpElements.botaoAdicionarAoCarrinho()).click({force: true })
    }

}

export default PDPpage;