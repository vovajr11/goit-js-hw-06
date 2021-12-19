const bgColorValue = document.querySelector(".color");
const colorGenerationBtn = document.querySelector(".change-color");

colorGenerationBtn.addEventListener("click", () => {
  bgColorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
