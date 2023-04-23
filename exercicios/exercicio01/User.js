class User {

  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  // método para realizar login
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso!!");
    } else {
      console.log("Email ou senha incorretos!!");
    }
  }
}

const pedro = new User("Pedro Augusto Bueno de Aquino", "p.augusto_23@outlook.com", "flume4545")

console.log(pedro);

// para realizar o teste condicional é necessário passar os valores dos atributos do método ao chamá-lo.
pedro.login("p.augusto_23@outlook.com", "flume4545");
