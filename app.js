// app.js will host most of the DOM work, interface/btns etc

import { newGame } from "./JS/game.js";

// set variables
const startBtn = document.querySelector(".start-btn");
const attackBtn = document.querySelector(".attack-btn");
const againBtn = document.querySelector(".again-btn");

// set-up
startBtn.addEventListener("click", () => {
  newGame();
  // change game-bar to play
  startBtn.parentElement.classList.add("game-bar--hidden");
  attackBtn.parentElement.classList.remove("game-bar--hidden");
});

// attack loop
attackBtn.addEventListener("click", () => attackRnd());

// attackRound() {
//   // attack(charAttacker, charDefender)
//   //  calc rand attack
//   //  check for kill/win
//   //  update dom
//   //
// }
