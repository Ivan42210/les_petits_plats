import { recipes } from "../../data/recipes.js";
import { searchBar } from "../utils/search.js";
import { listTitleFilters, makeList } from "../factories/listFactory.js";



searchBar(recipes);




/*Display cards*/

//const cardSection = document.getElementById('cardSection');

/*recipes.forEach((recipe) => {
    const cardDom = cardFactory(recipe);
    cardSection.appendChild(cardDom)
});*/





/*list to dropdown*/

listTitleFilters(recipes);
makeList(recipes)