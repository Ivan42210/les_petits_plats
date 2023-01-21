import { recipes } from "../../data/recipes.js";
import { cardFactory } from "../factories/recipeCard.js";
import { makeList } from "../factories/listFactory.js";
import { listTitleFilters } from "../factories/listFactory.js";








/*Display cards*/

const cardSection = document.getElementById('cardSection');

recipes.forEach((recipe) => {
    const cardDom = cardFactory(recipe);
    cardSection.appendChild(cardDom)
});


/*list to dropdown*/

listTitleFilters(recipes);

const testDatas = makeList(recipes);
console.log(testDatas);