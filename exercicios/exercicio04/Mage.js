const Character = require("./Character");

module.exports = class Mage extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, magicPoints) {
    super(name, healthPoints, attackPoints, defensePoints)
    this.magicPoints = magicPoints
  }

  attack(targetCharacter) {
    targetCharacter.healthPoints -= (this.attackPoints + this.magicPoints) - targetCharacter.defensePoints
  }

  healing(healingTarget) {
    healingTarget.healthPoints += this.magicPoints * 2
  }
}
