const itemsListRef = document.querySelectorAll("#categories .item");
console.log(`В списке ${itemsListRef.length} категории`);

[...itemsListRef].forEach(item => {
  const title = item.querySelector("h2").innerText;
  const itemList = item.querySelector("ul").querySelectorAll("li");
  console.log(`Категория: ${title}. Количество элементов: ${itemList.length}`);
});
