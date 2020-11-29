// import modules
import { Character } from "./characters/character.js";

export class Game {
  constructor(name1, name2) {
    this.player = new Character(name1, "./assets/k1.png");
    this.enemy = new Character(name2, "./assets/k2.png");
    this.playerDOM = document.querySelector(".player");
    this.enemyDOM = document.querySelector(".enemey");
  }
  // initiate game on page
  start() {
    this.updateCharDOM(this.player, this.playerDOM);
    this.updateCharDOM(this.enemy, this.enemyDOM);
  }
  // attack round
  async attackRound() {
    //  calc rand attack
    let end = await this.attack(this.player, this.playerDOM, this.enemy, this.enemyDOM);
    //  check for kill/win
    if (end) return this.player;
    //  calc rand attack
    end = await this.attack(this.enemy, this.enemyDOM, this.player, this.playerDOM);
    //  check for kill/win
    if (end) return this.enemy;
  }

  // reset
  reset() {
    this.playerDOM.innerHTML = "";
    this.enemyDOM.innerHTML = "";
  }

  // game end
  winner(player) {
    console.log(`${player.name} wins`);
  }

  async attack(charAttacker, charAttackerDOM, charDefender, charDefenderDOM) {
    return new Promise((resolve, reject) => {
      // determine attack dmg, rnd value between attackers weapon dmg range
      const max = charAttacker.weapon.dmgMax;
      const min = charAttacker.weapon.dmgMin;
      const dmg = Math.floor(Math.random() * (max - min + 1) + min);

      // animate attack
      const charImg = charAttackerDOM.querySelector(".char-img");
      charImg.classList.add("char-img--attack-right-animation");
      setTimeout(() => {
        charImg.classList.remove("char-img--attack-right-animation");

        // >>> This is all now nested in the timeout, so that it doesn't happen until after the animation.

        // reduce defender health
        charDefender.health -= dmg;
        // check for kill/win
        if (charDefender.health > 0) {
          // update DOM
          this.updateCharDOM(charDefender, charDefenderDOM);
          resolve();
        } else {
          this.playerDead(charDefender, charDefenderDOM);
          this.winner(charAttacker);
          resolve("end");
        }
      }, 1000);
    });
  }
  // attackAnimation(charAttacker) {
  //   return new Promise ((resolve, reject) => {

  //   })
  // }

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
