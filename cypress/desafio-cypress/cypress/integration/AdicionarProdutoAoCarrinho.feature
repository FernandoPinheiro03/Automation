Feature: Adicionar ao carrinho

    Scenario: Adicionar ao carrinho selecionando  uma cor e a memória
        Given Estou na página do Produto
        When Seleciono a cor
        And Clico em Adicionar ao Carrinho
        Then A Página Meu carrinho deve ser exibida mostrando o Produto Selecionado de acordo com a cor escolhida
    