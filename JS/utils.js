export function changeGameBar(hide, unhide) {
  hide.parentElement.classList.add("game-bar--hidden");
  unhide.parentElement.classList.remove("game-bar--hidden");
}
