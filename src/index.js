const recipeData = {
  name: "Veggie Stir Fry",
  ingredients: [
    "1 Red Bell Pepper Sliced",
    "2 Bok Choy Chopped",
    "1 Medium Onion Sliced",
    "2 Cloves Garlic Minced",
    "1 Tablespoon Grated Ginger",
    "3 Tablespoons Soy Sauce",
    "1 Tablespoon Sesame Oil",
    "1 Tablespoon Sugar",
    "1 Teaspoon Red Pepper flakes",
    "2 Green Onions Chopped",
    "2 Tablespoons Vegetable Oil",
    "Cooked Rice",
  ],
  steps: [
    "Chop all the vegetables and aromatics.",
    "Heat vegetable oil in a large wok or skillet.",
    "Add garlic, onion, and ginger. Sauté until fragrant.",
    "Toss in the rest of the vegetables and stir-fry for 5-6 minutes.",
    "Pour in soy sauce, sesame oil, and sugar. Mix well.",
    "Serve hot over cooked rice and top with green onions.",
  ],
};

function generateRecipe(event) {
  event.preventDefault();

  const nameElement = document.querySelector("#name");
  const ingredientsList = document.querySelector("#ingredients");
  const stepsList = document.querySelector("#steps");

  nameElement.innerHTML = recipeData.name;

  ingredientsList.innerHTML = recipeData.ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("");

  stepsList.innerHTML = recipeData.steps
    .map((step) => `<li>${step}</li>`)
    .join("");
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
