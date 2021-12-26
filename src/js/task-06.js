const input = document.querySelector("#validation-input");
const validNumberOfCharacters = Number(input.dataset.length);

input.addEventListener("blur", (evt) => {
  const currentValue = evt.currentTarget.value.trim();

  currentValue.length === validNumberOfCharacters
    ? (input.classList.remove("invalid"), input.classList.add("valid"))
    : (input.classList.remove("valid"), input.classList.add("invalid"));
});
