const refs = {
  categories: document.querySelector("#categories"),
  categoriesItem: document.querySelectorAll("#categories>li"),
};

const numberOfCategories = refs.categories.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

refs.categoriesItem.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}
    Elements: ${el.lastElementChild.children.length}`
  );
});
