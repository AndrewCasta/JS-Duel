export function changeGameBar(hide, unhide) {
  hide.parentElement.classList.add("game-bar--hidden");
  unhide.parentElement.classList.remove("game-bar--hidden");
}

export function getRandomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}
