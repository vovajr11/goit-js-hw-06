const inputName = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

inputName.addEventListener("input", (evt) => {
  inputName.value.trim() === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = evt.currentTarget.value);
});
