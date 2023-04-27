const Character = require("./Character")

module.exports = class Warrior extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, shieldPoints) {
    super(name, healthPoints, attackPoints, defensePoints)
    this.shieldPoints = shieldPoints
    this.battlePosition = "attacking"
  }

  attack(targetCharacter) {
    if (this.battlePosition === "attacking") {
      super.attack(targetCharacter)
    }
  }

  switchPosition() {
    if (this.battlePosition === "attacking") {
      this.battlePosition = "defending"
      this.defensePoints += this.shieldPoints
    } else {
      this.battlePosition = "attacking"
      this.defensePoints -= this.shieldPoints
    }
  }
}
