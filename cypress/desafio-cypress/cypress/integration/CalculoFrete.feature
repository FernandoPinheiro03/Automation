Feature: Realizar Calculo de Frete no PDP

    Scenario: Calculo preenchido por um endereço válido
        Given Estou logado no site
        And Acesso a página do produto
        When Preencho o codigo postal "60710680"
        Then Deve ser exibido a quantidade de dias úteis e o valor da entrega
    