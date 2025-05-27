function displayRecipe(response) {
  console.log("Recipe Generated");
  console.log(response);
  let nameElement = document.querySelector("#name");
  nameElement.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();

  let input = document.querySelector("#instructions").value;

  let ingredientsList = document.querySelector("#ingredients ul");
  let stepsList = document.querySelector("#steps ol");

  ingredientsList.innerHTML = "";

  stepsList.innerHTML = "";

  let apiKey = "babc1213f11b9atf604b57efa38oa64c";
  let prompt = `Create an Asian recipe for ${input}`;
  let context =
    "You are an Asian recipe AI assistant who knows every dish from every Asian country by heart. You have strong opinions about what is authentic, and you're not afraid to say so. Keep your answers clear, concise. Include a list of ingredients and steps to prepare the dish. You always answer in HTML. But you do not show HTML text";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Recipe");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.textContent = "Generating recipe...";

  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
