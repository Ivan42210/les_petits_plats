import { recipes } from "../../data/recipes.js";
import { dropdownSection, makeList } from "../factories/listFactory.js";
import { createTags } from "../factories/tagFactory.js";
import { dropdownToggle, inputOpenFuntion } from "../utils/dropdown.js";
import { removeArray } from "../utils/removeArray.js";
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
    const ingredientSection = document.querySelector('.ingredients-section');
    const applianceSection = document.querySelector('.appliance-section');
    const ustensilsSection = document.querySelector('.ustensils-section');
    const ingredientList = document.querySelector('#ingredientsArea');
    const applianceList = document.querySelector('#applianceArea');
    const ustensilsList = document.querySelector('#ustensilsArea');

    function getTagApi(e) {
        e.preventDefault();
        //  console.log(e.target.getAttribute('aria-label'))
        const label = e.target.getAttribute('aria-label');


        if (label === "ingredients") {
            resultIngredients.push(e.target.textContent);
            ingredientSection.innerHTML = '';
            resultIngredients.forEach((el) => {
                const tagDom = new createTags(el);
                tagDom.classList.add('bg-primary');
                tagDom.classList.add('ingredient_tag');
                ingredientSection.appendChild(tagDom);
                returnResult(arrays);

            })
            e.target.classList.add('d-none');
            const btn = document.querySelectorAll('.ingredient_tag');

            //set close btn on each buttons

            btn.forEach((el) => {
                const closeBtn = el.lastChild;
                closeBtn.addEventListener('click', function closeTags(event) {
                    event.preventDefault();
                    ingredientSection.innerHTML = '';
                    const value = event.target.parentNode.firstChild.textContent;
                    const spans = ingredientList.childNodes;

                    spans.forEach((span) => {
                        if (span.textContent == value) {
                            span.classList.remove('d-none');
                            removeArray(resultIngredients, value);
                            // console.log(resultIngredients);
                            for (let i in resultIngredients) {
                                const tagDom = new createTags(resultIngredients[i]);
                                tagDom.classList.add('bg-primary');
                                tagDom.classList.add('ingredient_tag');
                                ingredientSection.appendChild(tagDom);

                                returnResult(arrays);
                            }

                        }
                    })

                });

            })
            console.log('TEST INGREDIENT')
            console.log(resultIngredients)

        } else if (label === "appliance") {
            resultAppliance.push(e.target.textContent);
            applianceSection.innerHTML = '';
            resultAppliance.forEach((el) => {
                const tagDom = new createTags(el);
                tagDom.classList.add('bg-success');
                tagDom.classList.add('appliance_tag');
                applianceSection.appendChild(tagDom);
            })

            e.target.classList.add('d-none');
            const btn = document.querySelectorAll('.appliance_tag');

            //set close btn on each buttons

            btn.forEach((el) => {
                const closeBtn = el.lastChild;
                closeBtn.addEventListener('click', function closeTags(event) {
                    event.preventDefault();
                    applianceSection.innerHTML = '';
                    const value = event.target.parentNode.firstChild.textContent.toLowerCase();
                    const spans = applianceList.childNodes;

                    spans.forEach((span) => {
                        if (span.textContent.toLowerCase() == value) {
                            span.classList.remove('d-none');
                            removeArray(resultAppliance, value);
                            // console.log(resultAppliance);
                            for (let i in resultAppliance) {
                                const tagDom = new createTags(resultAppliance[i]);
                                tagDom.classList.add('bg-success');
                                tagDom.classList.add('appliance_tag');
                                applianceSection.appendChild(tagDom);
                            }
                        }
                    })

                });

            })

        } else if (label === "ustensils") {
            resultUstensils.push(e.target.textContent);
            ustensilsSection.innerHTML = '';
            resultUstensils.forEach((el) => {
                const tagDom = new createTags(el);
                tagDom.classList.add('bg-danger');
                tagDom.classList.add('ustensils_tag');
                ustensilsSection.appendChild(tagDom);
            })
            e.target.classList.add('d-none');
            const btn = document.querySelectorAll('.ustensils_tag');

            //set close btn on each buttons

            btn.forEach((el) => {
                const closeBtn = el.lastChild;
                closeBtn.addEventListener('click', function closeTags(event) {
                    event.preventDefault();
                    ustensilsSection.innerHTML = '';
                    const value = event.target.parentNode.firstChild.textContent;
                    const spans = ustensilsList.childNodes;

                    spans.forEach((span) => {
                        if (span.textContent == value) {
                            span.classList.remove('d-none');
                            removeArray(resultUstensils, value);
                            //console.log(resultUstensils);
                            for (let i in resultUstensils) {
                                const tagDom = new createTags(resultUstensils[i]);
                                tagDom.classList.add('bg-danger');
                                tagDom.classList.add('ustensils_tag');
                                ustensilsSection.appendChild(tagDom);
                            }
                        }
                    })

                });

            })
        }


        console.log('test résultats généraux');
        console.log(resultIngredients, resultAppliance, resultUstensils)



    }




}








function search(arrays) {
    const searchInput = document.getElementById('searchBar');
    const parent = document.getElementById('cardSection');
    resultsArray = Object.values(arrays);

    searchInput.addEventListener('input', (e) => getResults(e, arrays));





    function getResults(e) {
        e.stopPropagation()
        returnResult(arrays)

    }

    const retrieveResults = [...new Set(resultsArray)];
    retrieveResults.forEach((el) => {
        const cardDom = new cardFactory(el);
        parent.appendChild(cardDom);
    })




}

function returnResult(arrays) {
    const parent = document.getElementById('cardSection');
    const searchInput = document.getElementById('searchBar');

    if (searchInput.value.length >= 3 && resultIngredients.length === 0 && resultAppliance.length === 0 && resultUstensils.length === 0) {

        for (let array of arrays) {
            //console.log(array.name.toLowerCase());

            if (array.name.toLowerCase().includes(searchInput.value)) {
                parent.innerHTML = '';
                resultsArray = [];
                resultsArray.push(array);
                const retrieveResults = [...new Set(resultsArray)];
                //  console.log(retrieveResults);

                retrieveResults.forEach((el) => {
                    const cardDom = new cardFactory(el);
                    parent.appendChild(cardDom);
                });

            }
        }

    }
    /*else if (searchInput.value.length <= 3) {
           resultsArray = [];
           resultsArray = Object.values(arrays);
           const retrieveResults = [...new Set(resultsArray)];
           console.log(retrieveResults);
           retrieveResults.forEach((el) => {
               const cardDom = new cardFactory(el);
               parent.appendChild(cardDom);
           });
       }*/
    else if (searchInput.value.length >= 3 || resultIngredients.length >= 0 || resultAppliance.length >= 0 || resultUstensils.length >= 0) {

        for (let array of arrays) {

            /* console.log(array.ingredients[0].ingredient)
             if ( /*(searchInput.value !== 'undefined' && array.name.toLowerCase().includes(searchInput.value)) &&*/
            /* for(let i in ingredients){array.ingredients[i].ingredient }   && */
            /* array.appliance.includes(Object.values(resultAppliance)) && array.ustensils.includes(Object.values(resultUstensils))) {
             resultsArray = [];
             resultsArray.push(array);
             const retrieveResults = [...new Set(resultsArray)];
             console.log(retrieveResults);

             retrieveResults.forEach((el) => {
                 const cardDom = new cardFactory(el);
                 parent.appendChild(cardDom);
             });

             console.log(resultsArray);*/

            for (let i in array.ingredients) {
                console.log(searchInput.value)

                // console.log('valeur résultat ingredient')
                console.log(Object.values(resultIngredients))
                    /*     if (array.ingredients[i].ingredient.toLowerCase().includes(Object.values(resultIngredients)) && array.name.toLowerCase().indexOf(searchInput.value) != -1) {
                             resultsArray = [];
                             parent.innerHTML = '';
                             resultsArray.push(array);
                             //console.log('premier résultat')
                             //console.log(resultsArray);

                             for (let i in retrieveResults) {
                                 const cardDom = new cardFactory(retrieveResults[i]);
                                 parent.appendChild(cardDom);
                             }
                             /*   retrieveResults.forEach((el) => {
                                    const cardDom = new cardFactory(el);
                                    parent.appendChild(cardDom);
                                });*/
                    /*    } else {
                            const cardDom = new cardFactory(array);
                            parent.appendChild(cardDom)
                        }
                    }*/

            }
            /* } else if (searchInput.value.length === 0 && resultIngredients.length === 0 && resultAppliance.length === 0 && resultUstensils.length === 0) {
                 parent.innerHTML = '';
                 const arrayCleaned = [...new Set(arrays)];
                 arrayCleaned.forEach((el) => {
                     const cardDom = new cardFactory(el);
                     parent.appendChild(cardDom);
                 })*/
        }

    }






    /*   function test(arrays) {
           let testResult = [];
           for (let array of arrays) {


               if (array.name.toLowerCase().indexOf('coco') != -1) {
                   testResult.push(array);
                   console.log("test d'algorithme")
                   console.log(testResult)
               }
           }
       }*/


    /*list to dropdown*/

    dropAndTags(recipes)
    search(recipes)