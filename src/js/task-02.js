const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredienItem = ingredients.map((ingredienName) => {
  let ingredienItem = document.createElement("li");

  ingredienItem.className = "item";
  ingredienItem.textContent = ingredienName;

  return ingredienItem;
});

ingredientsList.append(...createIngredienItem);
