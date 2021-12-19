const input = document.querySelector("#validation-input");
const validNumberOfCharacters = input.dataset.length;

input.addEventListener("blur", (evt) => {
  evt.currentTarget.value.length > validNumberOfCharacters
    ? (input.classList.remove("invalid"), input.classList.add("valid"))
    : (input.classList.remove("valid"), input.classList.add("invalid"));
});