const inputControlsRef = document.querySelector("#controls");
const inputNumberRef = inputControlsRef.querySelector('input[type="number"]');
const buttonRenderRef = inputControlsRef.querySelector(
  'button[data-action="render"]'
);
const buttonDestroyRef = inputControlsRef.querySelector(
  'button[data-action="destroy"]'
);
const boxesRef = document.querySelector("#boxes");

buttonRenderRef.addEventListener("click", createBoxes);
buttonDestroyRef.addEventListener("click", destroyBoxes);

function randomColorValue(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createBoxes() {
  const arrayInput = [...new Array(parseInt(inputNumberRef.value))];
  const elementsArray = arrayInput.map((boxRef, index) => {
    boxRef = document.createElement("div");
    const boxSizeStep = 10;
    boxRef.style.height = `${30 + index * boxSizeStep}px`;
    boxRef.style.width = `${30 + index * boxSizeStep}px`;
    const red = randomColorValue(255);
    const green = randomColorValue(255);
    const blue = randomColorValue(255);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    boxRef.style.backgroundColor = randomColor;
    return boxRef;
  });
  return boxesRef.append(...elementsArray);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
