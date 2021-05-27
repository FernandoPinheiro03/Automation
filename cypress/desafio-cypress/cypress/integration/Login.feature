Feature: Login no site Samsung

    Scenario: Login com sucesso
        Given Tenho cadastro no site
        And Estou na página de Login
        When Realizo Login com "fernandopinheiro03@gmail.com" e "Pinheirolima10" validos
        Then A página de Dados Pessoais deve ser exibida e o email "fernandopinheiro03@gmail.com" deve ser mostrado
    