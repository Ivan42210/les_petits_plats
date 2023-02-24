export function dropdownSection(arrays) {
    const listTtitleIng = (Object.keys(arrays[0]))[3];
    const listTitleApp = (Object.keys(arrays[0]))[6];
    const listTitleUst = (Object.keys(arrays[0]))[7];
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
                return 'ustensile';
            }
        }

        array.forEach((element) => {

            const container = document.createElement('div');
            const div = document.createElement('div');
            div.setAttribute('id', `${element}Dropdown`);
            div.className = `color-${element} p-3 rounded ddbtn-container inactive`;
            div.setAttribute('aria-label', `${element}`)
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', `${element}`);
            input.setAttribute('placeholder', 'Rechercher par ' + categorize(element));
            input.className = 'bg-transparent border-0 dropdown-input text-light';
            const label = document.createElement('label');
            label.className = 'text-light mr-5 ddbtn cursor-p p-2 rounded-circle';
            const icon = document.createElement('i');
            icon.className = "fa-solid fa-chevron-down";
            label.appendChild(icon);
            label.setAttribute('for', `${element}`);
            const listArea = document.createElement('ul');
            listArea.setAttribute('id', `${element}Area`);
            listArea.className = 'list-group d-none';
            container.appendChild(div);
            div.appendChild(input);
            div.appendChild(label);
            div.appendChild(listArea);
            filterArea.appendChild(container);
            // console.log(filterArea);
        });

    }

    function createTagsSection(array) {
        const section = document.getElementById('tagSection');
        array.forEach((el) => {
            const div = document.createElement('div');
            div.className = 'col-lg-4 col-md-6 col-sm-12';
            const divCol = document.createElement('div');
            divCol.className = `${el}-section row gap-2`;
            divCol.setAttribute('aria-label', `${el}`);
            div.appendChild(divCol);
            section.appendChild(div)
        });

    }




    createFilterBtn(listTitles);
    createTagsSection(listTitles);
    //console.log(listTitles);


}

export function makeList(array) {
    //récupère les données et les classe par liste

    const applianceItemsList = [...new Set((array.map((recipe) => recipe.appliance.trim().toLowerCase())))];
    const ingredientItemsList = [...new Set(((array.map((recipe) => recipe.ingredients.map((ing) => ing.ingredient.trim().toLowerCase()))).flat()))];
    // console.log([...new Set(((array.map((recipe) => recipe.ingredients.map((ing) => ing.ingredient.trim().split(' '))))))])
    const ustensilsItemsList = [...new Set(array.map((recipe) => recipe.ustensils[0].trim().toLowerCase()))];
    const allLists = { ingredients: ingredientItemsList, appliance: applianceItemsList, ustensils: ustensilsItemsList };
    // pour chaque liste


    //foreach sur chacun des objets du tableau il peut être tertiairisé
    for (let object in allLists) {
        const parent = document.getElementById(`${object}Area`);
        // console.log('controle des listes')
        // console.log(object)
        allLists[object].forEach((el) => {


            // const li = document.createElement('li');
            // li.className = 'text-light list-group-item bg-transparent border-0';
            // li.textContent = el;
            // span.appendChild(li);
            const span = new createSpan(el, object)
            parent.appendChild(span);

        });



    }




}

function createSpan(element, category) {
    const span = document.createElement('span');
    span.className = `cursor-p text-light list-group-item bg-transparent border-0`;
    span.setAttribute('aria-label', `${category}`);
    span.setAttribute('value', `${element}`)
    span.textContent = element;
    return span

}