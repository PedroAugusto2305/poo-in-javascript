/*
const book = {
  title: "Eragon",
  pages: 468,
  published: true,
  inStock: 20,
  tags: ["fantasy", "adventure", "medieval"],
  author: {
    name: "Christopher Paolini"
  },
  // em objetos podemos adicionar métodos, que são como funções dentro de um objeto.
  addOnStock(quantitiy) {
    this.inStock += quantitiy  // o parametro this referencia o proprio objeto dentro de um método
  },
  save: function () {
    // é possivel também adicionar funções anônimas.
  }
}
*/

// função construtora(função que funciona como "fábrica de objetos"), sempre escrita em PascalCase
function Book(title, pages, tags, author) {
  // o this é utilizado para pegar o contexto, o JS entende que é uma função construtora.
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity
  }
  this.save = function () {
    // também é possível utilizar função anônima.
  }
}

const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure", "medieval"]

const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon);

const eldest = new Book("Eldest", 644, tags, author)

console.log(eldest)
