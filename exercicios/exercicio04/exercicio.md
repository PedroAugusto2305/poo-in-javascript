# Crie as seguintes classes utilizando javascript:

- [x] Uma classe Character que representa um personagem de u jogo.

  - [x] Ela deverá possuir atributos para, nome, pontos de vida, de ataque e de defesa.
  - [x] Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character) e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do pesonagem atual e a defesa do alvo.

---

- [x] Uma classe Thief que representa um personagem de um tipo diferente

  - [x] Ele deve herdar os atributos de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.

---

- [x] Uma classe Mage que representa outro tipo de personagem e também herda de Character

  - [x] No entando, essa classe também deve ter um atributo para pontos de magia.
  - [x] Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos pontos de magia.
  - [x] A classe Mage também deverá ter outro método exclusivo que servirá para aumentar os pontos de vida de um personagem alvo (passando como argumento do método) em um valor de duas vezes os pontos de magia do personagem atual.

---

- [x] Uma classe Warrior que representa outro tipo de personagem e também herda de Character.
  - [x] Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.
  - [x] Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for de ataque
  - [x] Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).
