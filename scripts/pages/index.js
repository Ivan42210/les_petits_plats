import { recipes } from "../../data/recipes.js";
import { cardFactory } from "../factories/recipeCard.js";








/*Display cards*/

const cardSection = document.getElementById('cardSection');

recipes.forEach((recipe) => {
    const cardDom = cardFactory(recipe);
    cardSection.appendChild(cardDom)
});


/*list to dropdown*/