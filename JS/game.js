// game class methods (main game loop in app.js)

// select weapons
// create characters
// set the DOM

// game round
// attack method:
// player attack enemy (rand num in weapon attk range)
// enemy attack player (rand num in weapon attk range)

// check for win, declare winner or loop again

// import modules
import { Character } from "./characters/character.js";

// set DOM variables
const playerDOM = document.querySelector(".player");
const enemyDOM = document.querySelector(".enemey");

// ===== Create ====== //

export function newGame() {
  // object for each player
  const [player, enemy] = createChars("steve", "bad-boy");
  // Update DOM for both players
  updateCharDOM(player, playerDOM);
  updateCharDOM(enemy, enemyDOM);
}

// set data
// create character objects, takes
function createChars(name1, name2) {
  const player = new Character(name1, "./assets/k1.png");
  const enemy = new Character(name2, "./assets/k2.png");
  return [player, enemy];
}

// set DOM
// takes player obj & DOM selector
function updateCharDOM(char, element) {
  console.log(char);
  element.innerHTML = `<img src="${char.img}" alt="" class="char-img" />
  <div>
    <p>Health: ${char.health}</p>
    <p>Weapon: ${char.weapon.name} (dmg: ${char.weapon.dmgMin}-${char.weapon.dmgMax})</p>
    <p>Name: ${char.name}</p>
  </div>`;
}
