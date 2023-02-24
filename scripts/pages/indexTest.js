import { recipes } from "../../data/recipes.js";
import { dropdownSection, makeList } from "../factories/listFactory.js";
import { dropdownToggle, inputOpenFuntion } from "../utils/dropdown.js";
import { tagFn, closeTag } from "../utils/apiTags.js";
import { removeArray } from "../utils/removeArray.js";
import { cardFactory } from "../factories/recipeCard.js";

let value = 0;
let resultsArray = [];
let resultIngredients = [];
let resultAppliance = [];
let resultUstensils = [];



const parentCards = document.getElementById('cardSection');



/* at the beggining all cards*/

function setCardFirst(arrays) {
    for (let array of arrays) {
        const cardDom = new cardFactory(array);
        parentCards.appendChild(cardDom);

    }
}

function searchBar(arrays) {
    const searchInput = document.getElementById('searchBar');
    searchInput.addEventListener('input', (e) => { searchFn(e) });

    function searchFn(e) {

        e.stopPropagation();
        value = searchInput.value
        takeDatas(arrays);

    }
}


/*set dropDowns*/

function DropdownPart(arrays) {
    dropdownSection(arrays);
    makeList(arrays);
    /*set add eventListener*/
    const btns = document.querySelectorAll('.ddbtn');
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => { dropdownToggle(e) })
    })

    /* set input dropdown function*/
    const dropInputs = document.querySelectorAll('.dropdown-input');
    console.log(dropInputs);
    dropInputs.forEach((btn) => { btn.addEventListener('input', (e) => { inputOpenFuntion(e) }) })

    /* set tags function*/
    resultIngredients = [];
    resultAppliance = [];
    resultUstensils = [];

    const ingredientSection = document.querySelector('.ingredients-section');
    const applianceSection = document.querySelector('.appliance-section');
    const ustensilsSection = document.querySelector('.ustensils-section');


    const itemsBtn = document.querySelectorAll('.list-group-item');
    itemsBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => getTagApi(e));
    });

    /* GET RESULTS WITH TAGS*/
    function getTagApi(e) {
        e.preventDefault();
        const labelCat = e.target.getAttribute('aria-label');
        const btnValue = e.target.getAttribute('value');
        tagFn(labelCat, btnValue, resultIngredients, resultAppliance, resultUstensils, ingredientSection, applianceSection, ustensilsSection);
        e.target.classList.add('d-none');
        takeDatas(arrays)
        const closeBtn = document.querySelectorAll('.close-btn');
        closeBtn.forEach((btn) => { btn.addEventListener('click', (e) => toggleTag(e)) });

        function toggleTag(e) {
            e.preventDefault()
            const value = e.target.parentNode.getAttribute('value');
            const ariaLabel = e.target.parentNode.getAttribute('aria-label')
            closeTag(value, ariaLabel);
            if (ariaLabel === 'ingredients') {
                removeArray(resultIngredients, value);

            } else if (ariaLabel === 'appliance') {
                removeArray(resultAppliance, value);
            } else if (ariaLabel === 'ustensils') {
                removeArray(resultUstensils, value);
            }
            e.target.parentNode.remove()
            takeDatas(arrays)


        }

    }


}



function takeDatas(arrays) {
    console.log(value)
    let searchResult = []

    if (value.length > 3) {
        console.log(value)
        for (let array of arrays) {

            const arrayName = array.name.toLowerCase();

            if (arrayName.indexOf(value) != -1) {

                searchResult.push(array);

            }
        }
    } else if (value.length < 3) {
        searchResult = arrays;
    }







    parentCards.innerHTML = '';

    let sum = 0
    let a = 0
    let b = 0
    let c = 0

    if (searchResult.length != 0 /*&& resultIngredients.length >= 0 || resultUstensils.length >= 0 || resultAppliance.length >= 0*/ ) {
        sum = 0
        a = 0
        b = 0
        c = 0

        for (let result of searchResult) {
            const resIngredients = result.ingredients.map((el) => el.ingredient.toLowerCase().trim());
            const resAppliance = result.appliance.toLowerCase();
            const resUtensils = result.ustensils.map((el) => el).flat();



            for (let ing of resultIngredients) {

                if (resIngredients.includes(ing)) {
                    a = 1
                } else {
                    a = -4;
                }
                console.log(a)
            }
            for (let app of resultAppliance) {
                if (resAppliance.includes(app)) {
                    b = 1
                } else {
                    b = -4;
                }
            }

            for (let ust of resultUstensils) {
                if (resUtensils.includes(ust)) {
                    c = 1
                } else {
                    c = -4
                }
                console.log(c)
            }



            sum = a + b + c;

            if (sum >= 0) {
                resultsArray = [];
                resultsArray.push(result);
                setCardFirst(resultsArray)
            }


        }

    }
}
// console.log('test de récupération général');
//console.log(resultIngredients)









setCardFirst(recipes);
DropdownPart(recipes);
searchBar(recipes);