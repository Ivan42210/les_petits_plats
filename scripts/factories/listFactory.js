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
            div.className = `color-${element} p-3 rounded ddbtn inactive`;
            div.setAttribute('aria-label', `${element}`)
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
            const listArea = document.createElement('div');
            listArea.setAttribute('id', `${element}Area`);
            listArea.className = 'row row-cols-3';
            div.appendChild(input);
            div.appendChild(label);
            div.appendChild(listArea);
            filterArea.appendChild(div);
            // console.log(filterArea);
        });
    }

    createFilterBtn(listTitles);


}

export function makeList(array) {

    const applianceItemsList = [...new Set((array.map((recipe) => recipe.appliance.trim().toLowerCase())))];

    const ingredientItemsList = [...new Set(((array.map((recipe) => recipe.ingredients.map((ing) => ing.ingredient.trim().toLowerCase()))).flat()))]

    const ustensilsItemsList = [...new Set(array.map((recipe) => recipe.ustensils[0].trim().toLowerCase()))];


    const allLists = { ingredients: ingredientItemsList, appliance: applianceItemsList, ustensils: ustensilsItemsList };


    function createDropElements(arrays) {
        arrays.forEach((array) => {
            const span = document.createElement('span');
            span.className = 'dropdown-item';
            span.textContent = array;
            return span;
        })
    }

    function createDropLists(arrays) {
        const btns = document.querySelectorAll('input');
        btns.forEach((btn) => {
            btn.addEventListener('click', (e) => { openDrop(e, arrays) });
        })

        function openDrop(e, arrays) {
            e.preventDefault();
            const parent = e.target.parentNode;
            const i = parent.childNodes[1].childNodes[0];
            const section = parent.childNodes[2];
            const { ingredients, appliance, ustensils } = arrays;
            console.log(parent)

            if (parent.getAttribute('aria-label') === 'ingredients' && parent.classList.contains('inactive' === true)) {
                console.log('salut')
            }

        }

    }
    return createDropLists(allLists);
}