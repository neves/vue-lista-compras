const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Lista de Compras',
    tituloMaxlength: 16,
    produtos: JSON.parse(localStorage.getItem('produtos') || '[]'),
    novoProduto: '',
    produtoSelecionado: null,
    filtros: {
      todos () {
        return true
      },

      comprados (produto) {
        return produto.comprado
      },

      pendentes (produto) {
        return ! produto.comprado
      },
    },
    filtroAtivo: 'todos',
  },

  computed: {
    tituloFormatado () {
      return this.titulo.toUpperCase().substr(0, this.tituloMaxlength)
    },

    produtosFiltrados () {
      var filtro = this.filtros[this.filtroAtivo]
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

  watch: {
    produtos: {
      deep: true,
      handler () {
        localStorage.setItem('produtos', JSON.stringify(this.produtos))
      },
    },
  },
})
