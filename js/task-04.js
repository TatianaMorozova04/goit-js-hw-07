const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");

let counterValue = valueRef.textContent;

const clickDecrement = () => {
  counterValue = parseFloat(counterValue) - 1;
  valueRef.textContent = counterValue;
};

const clickIncrement = () => {
  counterValue = parseFloat(counterValue) + 1;
  valueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener("click", clickDecrement);
btnIncrementRef.addEventListener("click", clickIncrement);
