import { createTags } from "../factories/tagFactory.js";



export function tagFn(label, value, resultIngredients, resultAppliance, resultUstensils, sectionIng, sectionApp, SectionUst) {


    if (label === 'ingredients') {
        sectionIng.innerHTML = '';
        resultIngredients.push(value);
        for (let array of resultIngredients) {
            const tagDom = new createTags(array);
            tagDom.classList.add('bg-primary');
            tagDom.setAttribute('aria-label', 'ingredients');
            tagDom.setAttribute('value', array);
            sectionIng.appendChild(tagDom);

        }
    } else if (label === 'appliance') {
        sectionApp.innerHTML = '';
        resultAppliance.push(value);
        for (let array of resultAppliance) {
            const tagDom = new createTags(array);
            tagDom.classList.add('bg-success');
            tagDom.setAttribute('aria-label', 'appliance');
            tagDom.setAttribute('value', array);
            sectionApp.appendChild(tagDom);
        }
    } else if (label === 'ustensils') {
        SectionUst.innerHTML = '';
        resultUstensils.push(value);
        for (let array of resultUstensils) {
            const tagDom = new createTags(array);
            tagDom.classList.add('bg-danger');
            tagDom.setAttribute('aria-label', 'ustensils');
            tagDom.setAttribute('value', array);
            SectionUst.appendChild(tagDom);
        }
    }

}



export function closeTag(value, label) {

    const listParent = document.querySelector(`#${label}Area`)
    const children = listParent.childNodes;
    for (let child of children) {
        const childValue = child.getAttribute('value');
        if (childValue === value) {
            child.classList.remove('d-none');
        }

    }


    // console.log(label)


}