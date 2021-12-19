const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counterValue: document.querySelector("#value"),
};

let counterInitialValue = 0;

const onDecrementClick = () => {
  refs.counterValue.textContent = counterInitialValue -= 1;
};

const onIncrementClick = () => {
  refs.counterValue.textContent = counterInitialValue += 1;
};

refs.decrementBtn.addEventListener("click", onDecrementClick);
refs.incrementBtn.addEventListener("click", onIncrementClick);
