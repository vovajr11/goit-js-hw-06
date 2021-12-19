const createBtn = document.querySelector("#create");
const destroyBtn = document.querySelector("#destroy");
const input = document.querySelector("input");
const box = document.querySelector("#boxes");

createBtn.addEventListener("click", getAmountDiv);
destroyBtn.addEventListener("click", destroyBoxes);

function getAmountDiv() {
  const amount = Number(input.value);

  createBoxes(amount);
}

function createBoxes(amount) {
  const sizeDefault = 30;

  for (let idx = 0; idx < amount; idx += 1) {
    const div = document.createElement("div");
    const widthDiv = sizeDefault + idx * 10;

    div.style.cssText = `width: ${widthDiv}px; height: ${sizeDefault}px; background-color: ${getRandomHexColor()}`;

    box.append(div);
  }
}

function destroyBoxes() {
  box.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
