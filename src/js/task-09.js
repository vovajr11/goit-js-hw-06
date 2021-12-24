const bgColorValue = document.querySelector(".color");
const colorGenerationBtn = document.querySelector(".change-color");

colorGenerationBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  bgColorValue.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
