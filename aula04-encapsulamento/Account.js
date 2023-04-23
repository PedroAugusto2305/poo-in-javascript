class Account {
  #password // privado, ou seja só é acessível dentro da classe
  #balance

  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 100
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return null
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}

const user = {
  email: "pedro@email.com",
  password: "1234567"
}

const myAccount = new Account(user);

console.log(myAccount)

console.log(myAccount.getBalance("pedro@email.com", "1234567")) // retorna o email e o balance
