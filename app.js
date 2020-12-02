// app.js will host most of the DOM work, interface/buttons etc

import "./JS/background.js";
import { Game } from "./JS/game.js";
import { changeGameBar } from "./JS/utils.js";

// set DOM variables
const startButton = document.querySelector(".start-button");
const attackButton = document.querySelector(".attack-button");
const againButton = document.querySelector(".again-button");
const winnerDOM = document.querySelector(".game-winner");
const playerName = document.querySelector("#playerName");

let game;

// Start Game
startButton.addEventListener("click", () => {
  game = new Game(playerName.value, `Evil-${playerName.value}`);
  game.start();
  // change game-bar to play
  changeGameBar(startButton, attackButton);
});

// Attack loop
attackButton.addEventListener("click", async () => {
  attackButton.disabled = true;
  let winner = await game.attackRound();
  if (winner) {
    winnerDOM.innerHTML = `Winner: ${winner.name}`;
    changeGameBar(attackButton, againButton);
  }
  attackButton.disabled = false;
});

// Play again / Reset
againButton.addEventListener("click", () => {
  game.reset();
  changeGameBar(againButton, startButton);
});
