// import modules
import { Character } from "./characters/character.js";

// ===== Create ====== //

export class Game {
  constructor(name1, name2) {
    this.player = new Character(name1, "./assets/k1.png");
    this.enemy = new Character(name2, "./assets/k2.png");
    this.playerDOM = document.querySelector(".player");
    this.enemyDOM = document.querySelector(".enemey");
  }
  // initiate game on page
  init() {
    this.updateCharDOM(this.player, this.playerDOM);
    this.updateCharDOM(this.enemy, this.enemyDOM);
  }
  // attack round
  attackRound() {
    //  calc rand attack
    this.attack(this.player, this.enemy);
    //  check for kill/win
    if (this.enemy.health > 0) {
      // update DOM
      this.updateCharDOM(this.enemy, this.enemyDOM);
    } else {
      this.playerDead(this.enemy, this.enemyDOM);
      this.winner(this.player);
    }
  }

  // game end
  winner(player) {
    console.log(`${player} wins`);
  }

  attack(charAttacker, charDefender) {
    // determine attack dmg, rnd value between attackers weapon dmg range
    const max = charAttacker.weapon.dmgMax;
    const min = charAttacker.weapon.dmgMin;
    const dmg = Math.floor(Math.random() * (max - min + 1) + min);
    // reduce defender health
    charDefender.health -= dmg;
  }
  playerDead(char, element) {
    char.health = "DEAD";
    this.updateCharDOM(char, element);
  }

  updateCharDOM(char, element) {
    element.innerHTML = `<img src="${char.img}" alt="" class="char-img" />
    <div>
      <p>Health: ${char.health}</p>
      <p>Weapon: ${char.weapon.name} (dmg: ${char.weapon.dmgMin}-${char.weapon.dmgMax})</p>
      <p>Name: ${char.name}</p>
    </div>`;
  }
}
