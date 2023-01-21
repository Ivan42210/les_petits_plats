export function listTitle(array) {
    const listTtitleIng = (Object.keys(array[0]))[3];
    const listTitleApp = (Object.keys(array[0]))[6];
    const listTitleUst = (Object.keys(array[0]))[7];
    const listTitles = [listTtitleIng, listTitleApp, listTitleUst];
    console.log(listTitles);



}

export function makeList(array) {

    const applianceItemsList = [...new Set((array.map((recipe) => recipe.appliance)))];
    const ingredientItemsList = [...new Set(((array.map((recipe) => recipe.ingredients.map((ing) => ing.ingredient))).flat()))]
    const ustensilsItemsList = [...new Set(array.map((recipe) => recipe.ustensils[0]))];

    applianceItemsList.forEach((app) => {
        const parent = document.getElementById('ApplianceSub');
        console.log(parent)
        const liEl = document.createElement('li');
        const elBtn = document.createElement('button');
        elBtn.className = "border-0 bg-transparent text-light"
        elBtn.textContent = app;
        liEl.appendChild(elBtn);
        parent.appendChild(liEl);
    });

    ingredientItemsList.forEach((ing) => {
        const parent = document.getElementById('ingredientSub');
        console.log(parent)
        const liEl = document.createElement('li');
        const elBtn = document.createElement('button');
        elBtn.className = "border-0 bg-transparent text-light"
        elBtn.textContent = ing;
        liEl.appendChild(elBtn);
        parent.appendChild(liEl);
    });

    ustensilsItemsList.forEach((ust) => {
        const parent = document.getElementById('UstensilsSub');
        console.log(parent)
        const liEl = document.createElement('li');
        const elBtn = document.createElement('button');
        elBtn.className = "border-0 bg-transparent text-light"
        elBtn.textContent = ust;
        liEl.appendChild(elBtn);
        parent.appendChild(liEl);
    });




}




/*export function createLists(element) {
    /*const ingredList = [...new Set((element).map(({ ingredients: { ingredient } }) => {
        return `${ingredient}`;
    }))];*/

/*  console.log(ingredList);
}*/