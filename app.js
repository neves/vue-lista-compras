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
      console.log('Adicionando novo produto:', this.novoProduto)
    },
  },
})
