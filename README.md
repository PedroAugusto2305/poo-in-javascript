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
