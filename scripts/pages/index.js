import { recipes } from "../../data/recipes.js";
import { dropdownSection, makeList } from "../factories/listFactory.js";
import { dropdownToggle, inputOpenFuntion } from "../utils/dropdown.js";
import { cardFactory } from "../factories/recipeCard.js";

let resultsArray = [];
let resultIngredients = [];
let resultAppliance = [];
let resultUstensils = [];



function dropAndTags(arrays) {
    dropdownSection(arrays);
    makeList(arrays);
    /* set togle dropdown*/
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
    const itemsBtn = document.querySelectorAll('.list-group-item');
    itemsBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => getTagApi(e));
    })

    /**/



    function getTagApi(e) {
        e.preventDefault();
        //  console.log(e.target.getAttribute('aria-label'))
        const label = e.target.getAttribute('aria-label');

        if (label === "ingredients") {
            resultIngredients.push(e.target.textContent);
        } else if (label === "appliance") {
            resultAppliance.push(e.target.textContent);
        } else if (label === "ustensils") {
            resultUstensils.push(e.target.textContent);
        }

        console.log(resultIngredients, resultAppliance, resultUstensils)
            //console.log(resultIngredients)
    }



}








function search(arrays) {
    const searchInput = document.getElementById('searchBar');
    const parent = document.getElementById('cardSection');
    resultsArray = Object.values(arrays);

    searchInput.addEventListener('input', (e) => getResults(e, arrays));





    function getResults(e) {
        e.stopPropagation()
        parent.innerHTML = '';
        if (searchInput.value.length >= 3) {

            for (let array of arrays) {
                //console.log(array.name.toLowerCase());

                if (array.name.toLowerCase().includes(searchInput.value)) {
                    resultsArray = [];
                    resultsArray.push(array);
                    const retrieveResults = [...new Set(resultsArray)];
                    console.log(retrieveResults);

                    retrieveResults.forEach((el) => {
                        const cardDom = new cardFactory(el);
                        parent.appendChild(cardDom);
                    });

                }
            }

        } else if (searchInput.value.length <= 3) {
            resultsArray = [];
            resultsArray = Object.values(arrays);
            const retrieveResults = [...new Set(resultsArray)];
            console.log(retrieveResults);
            retrieveResults.forEach((el) => {
                const cardDom = new cardFactory(el);
                parent.appendChild(cardDom);
            });
        }
    }

    const retrieveResults = [...new Set(resultsArray)];
    retrieveResults.forEach((el) => {
        const cardDom = new cardFactory(el);
        parent.appendChild(cardDom);
    })




}






/*list to dropdown*/

dropAndTags(recipes)
search(recipes);