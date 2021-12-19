const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredienItem = ingredients.forEach((ingredienName) => {
  let ingredienItem = document.createElement("li");

  ingredienItem.className = "item";
  ingredienItem.textContent = ingredienName;
  ingredientsList.append(ingredienItem);
});
