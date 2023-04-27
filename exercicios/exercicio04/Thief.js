const Character = require("./Character");

module.exports = class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.healthPoints -= (this.attackPoints - this.defensePoints) * 2
  }
}
