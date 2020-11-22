// app.js will host most of the DOM work, interface/btns etc

import { Game } from "./JS/game.js";

// set variables
const startBtn = document.querySelector(".start-btn");
const attackBtn = document.querySelector(".attack-btn");
const againBtn = document.querySelector(".again-btn");

const game = new Game("steve", "not-steve");
console.log(game);

// Start Game
startBtn.addEventListener("click", () => {
  game.init();
  // change game-bar to play
  startBtn.parentElement.classList.add("game-bar--hidden");
  attackBtn.parentElement.classList.remove("game-bar--hidden");
});

// attack loop
let play = attackBtn.addEventListener("click", () => game.attackRound());
console.log(play);
