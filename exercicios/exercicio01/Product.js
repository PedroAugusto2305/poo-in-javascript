class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  // método para adicionar item ao estoque
  addToStock(quantitiy) {
    this.inStock += quantitiy
  }

  // método para calcular o desconto
  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const tenis = new Product("Nike", "Tênis nike vermelho", 500);

// adicionando 10 itens ao estoque
tenis.addToStock(10)

// adicionando o desconto de 10% ao item
const priceWithDiscount = tenis.calculateDiscount(10)

console.log(tenis)
console.log(`O preço com desconto é: R$ ${priceWithDiscount} reais`);
