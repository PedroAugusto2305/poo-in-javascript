const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Itanhaém", 55, "Jardim Russi", "Taubaté", "SP");
const john = new Person("Pedro", addr);

console.log(john);
console.log(john.address.fullAddress())
