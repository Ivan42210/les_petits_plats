import { recipes } from "../../data/recipes.js";
import { dropdownSection, makeList } from "../factories/listFactory.js";
import { dropdownToggle, inputOpenFuntion } from "../utils/dropdown.js";
import { tagFn, closeTag } from "../utils/apiTags.js";
import { removeArray } from "../utils/removeArray.js";
import { cardFactory } from "../factories/recipeCard.js";

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
    searchInput.addEventListener('input', (e) => getSearchBarValue(e));

    function getSearchBarValue(e) {
        e.stopPropagation();
        const searchValue = searchInput.value;
        takeDatas(arrays, searchValue);

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



function takeDatas(arrays, searchValue) {

    /* console.log(resultIngredients)
     console.log(resultUstensils);
     console.log(resultAppliance)*/
    console.log(searchValue);
    parentCards.innerHTML = '';

    for (let array of arrays) {
        let sum = 0
        let a = 0
        let b = 0
        let c = 0
        let d = 0

        const arrayIngredients = array.ingredients.map((el) => { return el.ingredient.toLowerCase().trim() });
        const arrayAppliance = array.appliance.toLowerCase();
        const arrayUtensils = array.ustensils.map((el) => { return el }).flat();
        const arrayName = array.name.toLowerCase().split();









        if (resultIngredients.length != 0 || resultUstensils.length != 0 || resultAppliance.length != 0 || searchValue.length >= 3) {

            if (arrayName.includes(searchValue)) {
                d++
            } {
                d = -4
            }

            for (let result of resultIngredients) {

                if (arrayIngredients.includes(result) && d >= 0) {
                    a++
                } else {
                    a = -4;
                }
            }
            for (let app of resultAppliance) {
                if (arrayAppliance.includes(app) && d >= 0) {
                    b++
                } else {
                    b = -4;
                }
            }

            for (let ust of resultUstensils) {
                if (arrayUtensils.includes(ust) && d >= 0) {
                    c++
                } else {
                    c = -4
                }
            }


            sum = a + b + c + d;
        }

        if (sum >= 0) {
            /*  resultsArray = [];
              resultsArray.push(array);
              setCardFirst(resultsArray)*/

            console.log(d)


        } else if (sum < 0) {

        }


    }

}


// console.log('test de récupération général');
//console.log(resultIngredients)









setCardFirst(recipes);
DropdownPart(recipes);
searchBar(recipes);