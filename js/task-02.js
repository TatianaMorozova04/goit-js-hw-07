const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
const ingredientsList = ingredients.map(items => {
  const item = document.createElement("li");
  item.textContent = items;
  return item;
});

ingredientsRef.append(...ingredientsList);
