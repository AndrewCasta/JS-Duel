const backgroundGradients = [
  { name: "Lush", gradient: "linear-gradient(to top, #56ab2f, #a8e063)" },
  { name: "Magic", gradient: "linear-gradient(to top, #5d26c1, #a17fe0, #59c173)" },
  { name: "Red Mist", gradient: "linear-gradient(to top, #000000, #e74c3c)" },
  { name: "Vice City", gradient: "linear-gradient(to top, #3494e6, #ec6ead)" },
];
const backgroundButtonsContainer = document.querySelector(".background-buttons");
const backgroundDOM = document.querySelector("main");

// Create buttons from array
backgroundButtonsContainer.innerHTML = backgroundGradients
  .map(background => {
    return `<button class="button button--background ">${background.name}</button>`;
  })
  .join("");

// Select buttons, add event to update background
const backgroundButtons = document.querySelectorAll(".button--background");

for (const button of backgroundButtons) {
  button.addEventListener("click", () => {
    const background = backgroundGradients.find(gradient => gradient.name === button.textContent);
    backgroundDOM.style.background = background.gradient;
  });
}
