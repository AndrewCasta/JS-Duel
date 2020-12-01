// import modules
import { Character } from "./characters/character.js";

export class Game {
  constructor(name1, name2) {
    this.player = new Character(name1, "./assets/k1.png");
    this.enemy = new Character(name2, "./assets/k2.png");
    this.playerDOM = document.querySelector(".player");
    this.enemyDOM = document.querySelector(".enemy");
  }
  // initiate game on page
  start() {
    this.updateCharDOM(this.player, this.playerDOM);
    this.updateCharDOM(this.enemy, this.enemyDOM);
  }
  // attack round
  async attackRound() {
    //  calc rand attack
    let gameEnd = await this.attack(this.player, this.playerDOM, this.enemy, this.enemyDOM);
    //  check for kill/win
    if (gameEnd) return this.player;
    //  calc rand attack
    gameEnd = await this.attack(this.enemy, this.enemyDOM, this.player, this.playerDOM);
    //  check for kill/win
    if (gameEnd) return this.enemy;
  }

  attack(charAttacker, charAttackerDOM, charDefender, charDefenderDOM) {
    return new Promise(async (resolve, reject) => {
      // determine attack dmg, rnd value between attackers weapon dmg range
      const max = charAttacker.weapon.dmgMax;
      const min = charAttacker.weapon.dmgMin;
      const dmg = Math.floor(Math.random() * (max - min + 1) + min);

      // animate attack
      await this.attackAnimation(dmg, charAttackerDOM, charDefenderDOM);

      // reduce defender health
      charDefender.health -= dmg;

      // update HP & resolve for kill/win
      if (charDefender.health > 0) {
        this.updateCharDOM(charDefender, charDefenderDOM);
        resolve();
      } else {
        this.playerDead(charDefender, charDefenderDOM);
        this.winner(charAttacker);
        resolve("gameEnd");
      }
    });
  }
  // REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
  // REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  // REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
  // REF: https://blog.adriaan.io/make-async-await-work-in-promises.html
  // REF: https://stackoverflow.com/questions/21518381/proper-way-to-wait-for-one-function-to-finish-before-continuing

  attackAnimation(dmg, charAttackerDOM, charDefenderDOM) {
    return new Promise((resolve, reject) => {
      const charImg = charAttackerDOM.querySelector(".char-img");
      const playerCheck = charAttackerDOM.classList.contains("player");
      const flash = charDefenderDOM.querySelector(".damage-flash");
      flash.textContent = dmg;
      if (playerCheck) {
        setTimeout(() => {
          charImg.classList.add("char-img--attack-right-animation");
          flash.classList.add("damage-flash--unhide");
          setTimeout(() => {
            charImg.classList.remove("char-img--attack-right-animation");
            flash.classList.remove("damage-flash--unhide");
            resolve();
          }, 600);
        }, 300);
      } else {
        setTimeout(() => {
          charImg.classList.add("char-img--attack-left-animation");
          flash.classList.add("damage-flash--unhide");
          setTimeout(() => {
            charImg.classList.remove("char-img--attack-left-animation");
            flash.classList.remove("damage-flash--unhide");
            resolve();
          }, 600);
        }, 300);
      }
    });
  }

  // reset clears page for new game
  reset() {
    this.playerDOM.innerHTML = "";
    this.enemyDOM.innerHTML = "";
  }

  // game end
  winner(player) {
    console.log(`${player.name} wins`);
  }

  playerDead(char, element) {
    char.health = "DEAD";
    this.updateCharDOM(char, element);
    if (element.classList.contains("player")) {
      element.querySelector("img").classList.add("char-img--player-dead");
    } else {
      element.querySelector("img").classList.add("char-img--enemy-dead");
    }
  }

  updateCharDOM(char, element) {
    element.innerHTML = `<img src="${char.img}" alt="" class="char-img" />
    <div class="damage-flash">-</div>
    <div>
      <p>Health: ${char.health}</p>
      <p>Weapon: ${char.weapon.name}</p>
      <p>Weapon Dmg: ${char.weapon.dmgMin} - ${char.weapon.dmgMax}</p>
      <p>Name: ${char.name}</p>
    </div>`;
  }
}
