import { recipes } from "../../data/recipes.js";
import { dropdownSection, makeList } from "../factories/listFactory.js";
import { dropdownToggle, inputOpenFuntion } from "../utils/dropdown.js";
import { tagFn, closeTag } from "../utils/apiTags.js";
import { removeArray } from "../utils/removeArray.js";
import { cardFactory } from "../factories/recipeCard.js";


let value = 0
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

    parentCards.innerHTML = '';
    //let valueTest = []


    if (value.length > 3) {

        console.log(value)

        function filterSearchBar(datas, comp) {

            const search = datas.filter(function(arr) { return arr.name.toLowerCase().indexOf(comp.toLowerCase()) != -1; })
            resultsArray = Object.values(search)

        }

        filterSearchBar(arrays, value)

    } else {
        resultsArray = Object.values(arrays);
    }

    function filterIngredient(datas, query) {
        //const ingFilter = datas.filter(function(data) { return data.ingredients.map((ing) => { ing.ingredient.toLowerCase().indexOf(query) != 1 }) })
        const filterIng = datas.filter(function(data) { return data.ingredients.map((ing) => ing.ingredient.toLowerCase()).indexOf(query) != -1; });
        resultsArray = Object.values(filterIng);
    }

    function filterAppliance(datas, query) {
        const filterApp = datas.filter(function(data) { return data.appliance.toLowerCase().indexOf(query) != -1; })
        resultsArray = Object.values(filterApp);
    }

    function filterUstensils(datas, query) {
        const filterUst = datas.filter(function(data) { return data.ustensils.map((ust) => ust.toLowerCase()).indexOf(query) != -1; });
        resultsArray = Object.values(filterUst)
    }

    resultIngredients.forEach((el) => { filterIngredient(resultsArray, el); });
    resultAppliance.forEach((el) => { filterAppliance(resultsArray, el); });
    resultUstensils.forEach((el) => { filterUstensils(resultsArray, el) })

    setCardFirst(resultsArray);

}











setCardFirst(recipes);
DropdownPart(recipes);
searchBar(recipes);