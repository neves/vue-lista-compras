const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Lista de Compras',
    tituloMaxlength: 16,
    produtos: [
      {nome: 'Arroz', comprado: false},
      {nome: 'Feijão', comprado: true},
    ],
    novoProduto: '',
  },

  methods: {
    add () {
      var novo = {
        nome: this.novoProduto,
        comprado: false
      }
      this.produtos.push(novo)
      this.novoProduto = ''
    },
  },
})
