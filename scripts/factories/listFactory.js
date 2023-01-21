export function listTitleFilters(array) {
    const listTtitleIng = (Object.keys(array[0]))[3];
    const listTitleApp = (Object.keys(array[0]))[6];
    const listTitleUst = (Object.keys(array[0]))[7];
    const listTitles = [listTtitleIng, listTitleApp, listTitleUst];



    /* Création des boutons filtres*/

    function createFilterBtn(array) {
        const filterArea = document.getElementById('dropdownContainer');

        function categorize(element) {
            if (element === 'ingredients') {
                return 'ingrédient';
            } else if (element === 'appliance') {
                return 'appareil';
            } else if (element === 'ustensils') {
                return 'ustensil';
            }
        }

        array.forEach((element) => {
            const div = document.createElement('div');
            div.setAttribute('id', `${element}Dropdown`);
            div.className = `color-${element} p-2 rounded`;
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', `${element}`);
            input.setAttribute('placeholder', 'Rechercher par ' + categorize(element));
            input.className = 'bg-transparent border-0 mr-2';
            const label = document.createElement('label');
            label.className = 'text-light';
            const icon = document.createElement('i');
            icon.className = "fa-solid fa-chevron-down";
            label.appendChild(icon);
            label.setAttribute('for', `${element}`);
            div.appendChild(input);
            div.appendChild(label);

            filterArea.appendChild(div);
        });
    }

    createFilterBtn(listTitles);


}

export function makeList(array) {

    const applianceItemsList = [...new Set((array.map((recipe) => recipe.appliance.trim().toLowerCase())))];

    const ingredientItemsList = [...new Set(((array.map((recipe) => recipe.ingredients.map((ing) => ing.ingredient.trim().toLowerCase()))).flat()))]

    const ustensilsItemsList = [...new Set(array.map((recipe) => recipe.ustensils[0].trim().toLowerCase()))];

    const allLists = { ingredients: ingredientItemsList, appliance: applianceItemsList, ustensils: ustensilsItemsList };

    console.log(allLists)

    /*function listFilters(){
        e.preventDefault();
        allLists.array.forEach(element => {
            
        });
    }*/


    /* applianceItemsList.forEach((app) => {
         const parent = document.getElementById('ApplianceSub');
         const liEl = document.createElement('li');
         const elBtn = document.createElement('button');
         elBtn.className = "border-0 bg-transparent text-light"
         elBtn.textContent = app;
         liEl.appendChild(elBtn);
         parent.appendChild(liEl);
     });

     ingredientItemsList.forEach((ing) => {
         const parent = document.getElementById('ingredientSub');
         const liEl = document.createElement('li');
         const elBtn = document.createElement('button');
         elBtn.className = "border-0 bg-transparent text-light"
         elBtn.textContent = ing;
         liEl.appendChild(elBtn);
         parent.appendChild(liEl);
     });

     ustensilsItemsList.forEach((ust) => {
         const parent = document.getElementById('UstensilsSub');
         const liEl = document.createElement('li');
         const elBtn = document.createElement('button');
         elBtn.className = "border-0 bg-transparent text-light"
         elBtn.textContent = ust;
         liEl.appendChild(elBtn);
         parent.appendChild(liEl);
     });*/




}




/*export function createLists(element) {
    /*const ingredList = [...new Set((element).map(({ ingredients: { ingredient } }) => {
        return `${ingredient}`;
    }))];*/

/*  console.log(ingredList);
}*/