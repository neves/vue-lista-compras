# O que aprenderemos

- Criar a lista de produtos e fazer bind no html

## Roteiro da Aula

1. Criar uma variável chamada `produtos` contendo um array com 2 produtos, arroz e feijão
- Utilizar a tag `v-for="produto in produtos"` no li para desenhar a lista
- Exibir o produto dentro da lista utilizando `{{ produto }}`
- Atualizar o contador de produtos utilizando `{{ produtos.length }}`
- No console, adicionar um novo produto pelo comando:
  `app.$data.produtos.push({nome: 'Batata'})`
- Ainda no console, remova o último produto:
  `app.$data.produtos.pop()`
- Por último, remova o primeiro produto:
  `app.$data.produtos.shift()`

### Documentação relevante

- http://vuejs.org/guide/list.html
