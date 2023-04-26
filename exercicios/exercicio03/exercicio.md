## Classes para o DOM

- Criar uma classe para um elemento genérico do DOM (dica: utilize o nome Component, pois o nome Element poderá gerar conflitos com a implementação do navegador).
- Essa classe deverá possuir um atributo privado para ler o valor desse atributo.
- Ela também deve possuir um método build para criar o elemento que deve ser chamado uma vez no construtor, mas também deve ser possível chamá-lo novamente através da instância.
- Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela instância a qualquer momento.

- Uma classe específica para elementos input, que deve ser uma subclasse da classe Component.

- Uma classe específica para elementos label, que deve possuir uma subclasse da classe Component e no seu construtor deve ser possível indicar como parâmetro qual será o seu conteúdo em texto.

- Uma classe específica para elementos form, que deve ser uma subclasse da classe Component e possuir um método para adicionar elementos como filhos (através das instâncias das classes Component e suas subclasses).

---

## to-do:

- [x] Criar classe Component;
  - [x] Método build (cria elemento);
  - [x] Método render (adiciona elemento na página);
- [x] Classe para elementos input;
- [x] Classe para elementos label;
  - [x] Parâmetro do conteúdo do texto;
- [ ] Classe form;
  - [ ] Método para adicionar elementos filhos.
