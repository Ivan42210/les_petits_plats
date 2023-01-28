import { cardFactory } from "../factories/recipeCard.js";

export function searchBar(arrays) {
    const searchInput = document.getElementById('searchBar');
    const parent = document.getElementById('cardSection');
    let resultsArray = Object.values(arrays);

    searchInput.addEventListener('input', (e) => getResults(e, arrays));




    function getResults(e) {
        e.stopPropagation()
        parent.innerHTML = '';
        resultsArray = [];

        console.log(searchInput.value.length);

        if (searchInput.value.length >= 3) {

            for (let array of arrays) {
                //console.log(array.name.toLowerCase());

                if (array.name.toLowerCase().includes(searchInput.value)) {
                    resultsArray.push(array);
                    resultsArray.forEach((el) => {
                        const cardDom = new cardFactory(el);
                        parent.appendChild(cardDom);
                    });

                }
            }


        } else if (searchInput.value.length <= 3) {
            resultsArray = Object.values(arrays);
            resultsArray.forEach((el) => {
                const cardDom = new cardFactory(el);
                parent.appendChild(cardDom);
            });
        }



    }


    resultsArray.forEach((el) => {
        const cardDom = new cardFactory(el);
        parent.appendChild(cardDom);
    });
}
























/*export function search(arrays) {
    const parent
    function searchBar() {
        const searchInput = document.getElementById('searchBar');
        searchInput.addEventListener('input', (e) => returnResult(e, arrays));

        function returnResult(e, arrays) {
            e.preventDefault();
            newTabs = [];
            console.log(newTabs);
            const inputValue = searchInput.value;


          

            if (inputValue.length >= 3) {
                for (let array of arrays) {


                    if (array.name.toLowerCase().includes(inputValue)) {
                        newTabs.push(array);
                        

                    }
                }
                console.log(newTabs)
            } else {
                return array
            }


        }




    }

    searchBar(arrays);
    console.log(newTabs);
    return newTabs;
}*/




/*arrays.filter(array => {
    let name = array.name.toLowerCase();
    if (inputValue === name);
    newTab.push(array);
    console.log(array);*/



/*if (inputValue.length >= 3) {
          for (let i = 0; i > length; i++) {
              datas.forEach((data) => {
                  if (data.toLowerCase().includes(inputValue, 1)) {
                      resultDatas.push(newTab);
                      return resultDatas;
                  };
              });
          }
      }*/