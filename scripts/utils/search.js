import { cardFactory } from "../factories/recipeCard.js";


export function searchBar(arrays) {
    const searchInput = document.getElementById('searchBar');
    const parent = document.getElementById('cardSection');
    let resultsArray = Object.values(arrays);

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