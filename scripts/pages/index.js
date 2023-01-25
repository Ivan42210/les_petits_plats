import { recipes } from "../../data/recipes.js";
import { search } from "../utils/search.js";
import { cardFactory } from "../factories/recipeCard.js";
import { listTitleFilters, makeList } from "../factories/listFactory.js";





search(recipes);




/*Display cards*/

/*const cardSection = document.getElementById('cardSection');

recipes.forEach((recipe) => {
    const cardDom = cardFactory(recipe);
    cardSection.appendChild(cardDom)
});*/


/*list to dropdown*/

listTitleFilters(recipes);
makeList(recipes)