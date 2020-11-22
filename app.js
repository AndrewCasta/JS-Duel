// app.js will host most of the DOM work, interface/btns etc

import { Game } from "./JS/game.js";

// set variables
const startBtn = document.querySelector(".start-btn");
const attackBtn = document.querySelector(".attack-btn");
const againBtn = document.querySelector(".again-btn");
const winnerDOM = document.querySelector(".game-winner");

let game;

// Start Game
startBtn.addEventListener("click", () => {
  game = new Game("steve", "not-steve");
  game.start();
  // change game-bar to play
  startBtn.parentElement.classList.add("game-bar--hidden");
  attackBtn.parentElement.classList.remove("game-bar--hidden");
});

// Attack loop
attackBtn.addEventListener("click", () => {
  let winner = game.attackRound();
  if (winner) {
    winnerDOM.textContent = `Winner: ${winner.name}`;
    attackBtn.parentElement.classList.add("game-bar--hidden");
    againBtn.parentElement.classList.remove("game-bar--hidden");
  }
});

// Play again / Reset
againBtn.addEventListener("click", () => {
  game.reset();
  againBtn.parentElement.classList.add("game-bar--hidden");
  startBtn.parentElement.classList.remove("game-bar--hidden");
});
