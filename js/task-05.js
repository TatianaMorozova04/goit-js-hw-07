const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", event => {
  spanRef.textContent = event.target.value ? event.target.value : "незнакомец";
});
