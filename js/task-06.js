const inputRef = document.querySelector("#validation-input");
const dataLengthRef = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", event => {
  const isValid = event.target.value.length === parseInt(dataLengthRef);

  inputRef.classList.toggle("valid", isValid);
  inputRef.classList.toggle("invalid", !isValid);
});
