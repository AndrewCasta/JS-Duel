// app.js will host most of the DOM work, interface/btns etc

import { createChars, updateCharDOM } from "./JS/game.js";

// set variables
const playerDOM = document.querySelector(".player");
const enemyDOM = document.querySelector(".enemey");
const startBtn = document.querySelector(".start-btn");
const attackBtn = document.querySelector(".attack-btn");
const againBtn = document.querySelector(".again-btn");

// set-up
startBtn.addEventListener("click", () => {
  // object for each player
  const [player, enemy] = createChars("steve", "bad-boy");
  // Update DOM for both players
  updateCharDOM(player, playerDOM);
  updateCharDOM(enemy, enemyDOM);
});
