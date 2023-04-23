# Programação Orientada a Objetos

-> É um paradigma de linguagem de programação.

-> Fundamentos: Associação, Encapsulamento, Herança, Polimorfismo.

-> Como usar no JS: Classes e instâncias, construtores, acessadores, e etc...

## O que é Porgramação Orientada a Objetos?

- Um paradigma de programação, ou seja, um conjunto de conceitos e recursos de linguagem que guiam a forma como programamos.

- Tem como peça central os objetos e a forma como eles se comunicam.

- Os objetos podem conter dados (atributos) e código (métodos).

-> Outros dois termos importantes na POO são as classes e instâncias

- Classes: São como fábricas de objetos a partir de uma "forma";
- Instâncias: São os objetos fabricados pelas classes.

## Associação

- Uma associação é um relacionamento entre classes que permite que umna instância de uma classe faça a outra realizar uma ação.

- É como dizer para a aplicação que um objeto de um tipo está conectado, ou depende, de um objeto de outro tipo.

Exemplos:
-> Objetos de uma classe Person possuem um atributo que é um objeto da classe Address.

-> Objetos de uma classe Product possuem um atributo que é um array de objetos da classe Category.

## Encapsulamento

- Encapsulamento é o princípio de impedir que determinadas partes de uma classe sejam acessíveis pelo contexo exterior.

- No JavaScript existem 2 níveis de encapsulamento:

  1. Público: onde o atributo/método é acessível fora da classe (nível padrão)
  2. Privado: onde o atributo/método só é acessível dentro da própria classe

- Para definirmos um atributo ou método como privado utilizamos um # no começo do seu nome.

- Todo atributo ou método que não for privado será automaticamente público.

- Exemplos:
  1. Uma classe tem um atributo que é definido uma vez durante a construção mas depois não pode ser alterado diretamente (usando obj.atributo = "novo valor")
  2. Uma classe possui um método principal internamente chama vários outros métodos da própria classe que não fazem sentido individualmente.

## Herança

- É um recurso que permite criar classes que incluem, ou "herdam" atributos e métodos de uma outra classe.

- À classe que é herdada damos o nome de **superclass** (ou classe mãe), e à classe que herda, o nome de **subclass** (ou classe filha).

- Uma classe filha possui todos os atributos e métodos da classe mãe, mas também pode possuir os seus próprios (que serão exclusivos dela).

- Exemplos:
  1. Imagine uma classe User que possui seus atributos e métodos. Poderíamos ter classes AdminUser, EditorUser e StandardUser que são todas filhas de User, mas cada uma também possui seus próprios atributos e métodos.
  2. Ou ainda uma classe Property (como em um imóvel) pode ser a classe mãe das classes filhas House e Apartment.
