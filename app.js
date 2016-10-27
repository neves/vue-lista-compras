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
    produtoSelecionado: null,
    filtros: {
      todos () {
        return true
      },

      comprados (produto) {
        return produto.comprado
      },
    },
  },

  computed: {
    tituloFormatado () {
      return this.titulo.toUpperCase().substr(0, this.tituloMaxlength)
    },

    produtosFiltrados () {
      var filtro = this.filtros['comprados']
      return this.produtos.filter(filtro)
    },
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

    excluir (i) {
      if (confirm('Tem certeza?')) {
        this.produtos.splice(i, 1)
      }
    },

    editando (produto) {
      return produto === this.produtoSelecionado
    },

    selecionar (produto) {
      this.produtoSelecionado = produto
    },
  },

  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      },
    },
  },

  filters: {
    pluralize (count, palavra) {
      return count == 1 ? `${count} ${palavra}` : `${count} ${palavra}s`
    },
  },
})
