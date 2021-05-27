class SmartphoneElements {

    primeiroProduto = () => {
        return ':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib'
    }
    
    botaoComprarProduto = () => {
        return ':nth-child(9) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal'
    }

}

export default SmartphoneElements;