class PDPElements {

    campoCodigoPostal = () => {
        return '.vtex-address-form-4-x-input'
    }

    botaoCalcular = () => {
        return '.vtex-store-components-3-x-shippingContainer > .vtex-button > .vtex-button__label'
    }

    labelTela= () => {
        return '.samsungbr-samsung-store-0-x-ProductRichText > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy'
    }

    tabelaAposCalcularFrete= () => {
        return '.vtex-store-components-3-x-shippingTable'
    }

    tipoDeEntrega = () =>{
        return '.vtex-store-components-3-x-shippingTableLabel'
    }

    diasParaEntrega = () =>{
        return '.vtex-store-components-3-x-shippingTableCellDeliveryEstimate'
    }

    valorDoFrete = () =>{
        return '.vtex-store-components-3-x-shippingTableCellDeliveryPrice'
    }

    corPreto = () => {
        return '.vtex-store-components-3-x-skuSelectorItem--preto > .vtex-store-components-3-x-skuSelectorInternalBox > .absolute'
    }

    botaoAdicionarAoCarrinho = () => {
        return '.justify-between > .ttu > .vtex-button > .vtex-button__label'
    }

}

export default PDPElements;