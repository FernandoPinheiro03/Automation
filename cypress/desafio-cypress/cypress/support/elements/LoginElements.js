class LoginElements {

    iconeFecharCookie = () => {
        return '.samsungbr-samsung-store-0-x-closeBtnBanner > span'
    }
 
    textoPaginaLogin = () => {
        return '.vtex-login-2-x-options > .vtex-login-2-x-formTitle'
    }

    campoEmail = () => {
        return '.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input'
    }

    campoSenha = () => {
        return '.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input'
    }

    botaoEntrar = () => {
        return '.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label'
    }

    labelDadosPessoais = () => {
        return ('.db-m > .vtex-pageHeader__container > .c-on-base > .vtex-pageHeader__title')
    }

    emailDadosPessoais = () => {
        return '.vtex-my-account-1-x-emailContainer > .light'
    }
}

export default LoginElements;