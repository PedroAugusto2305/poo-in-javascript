const Author = require("./Author");
const Post = require("./Post");

const pedro = new Author("Pedro Augusto");
const post = pedro.writePost("Programação Orientada a Objetos", "Lorem ipsum dolor sic amet ...");

post.addComent("Interessante!!!");
post.addComent("Vou testar esse paradgma!!!");

console.log("Escolha uma opção:");
