class Book {
  // é um método, recebe parametros que são usados ao instanciar os objetos.
  constructor(title) {
    this.title = title
    this.published = false
  }

  // declaramos métodos fora do constructor
  publish() {
    this.published = true
  }
}

const eragon = new Book("Eragon");
const eldest = new Book("Eldest");

eragon.publish();

console.log(eragon);
console.log(eldest);

console.log(eragon instanceof Book) // instanceof => verifica se a instancia pertence a classe | se verdadeiro o resultado: true se não resultado: false
