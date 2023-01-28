export function cardFactory(arrays) {
    const { name, time, description, ingredients } = arrays;
    const ingredientList = [];

    for (const x in ingredients) {
        const ingred = ingredients[x].ingredient;
        const quant = ingredients[x].quantity === undefined ? ' ' : ' : ' + ingredients[x].quantity
        const un = ingredients[x].unit === undefined ? ' ' : ingredients[x].unit
        ingredientList.push(`<li class="fs-card"><strong class="fs-card">${ingred}</strong> ${quant} ${un}</li>`)


    }

    function getCard() {
        const ingredientPart = ingredientList.join('');
        const div = document.createElement('div')
        div.className = "col-lg-4 col-md-6 col-sm-12";
        const article = document.createElement('article');
        div.appendChild(article);
        article.className = 'card card-transition card-hover position-relative p-0 pb-1 overflow-hidden mx-auto h-100 cursor-pointer';
        const a = document.createElement('a');
        article.appendChild(a);
        a.className = 'position absolute top-0 left-0 bottom-0 right-0 text-decoration-none text-dark'
        a.innerHTML =
            `<img src="" class="card-img-top img-fluid" style="height: 178px; background-color: gray;" />
            <div class="d-flex justify-content-between px-4"><h5 class="card-title fs-5 w-50 d-flex align-items-center text-truncate">${name}</h5 class="fs-5 w-50"><h5>Durée: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
          </svg> ${time}</h5></div>
        <section class="card-body d-flex justify-content-between">
        <ul class="w-50 pr-1">${ingredientPart}</ul>
        <p class= "w-50 text-justify overflow-hidden fs-card h-50 text-truncate text-justify" style="max-height: 150px;">${description}</p></section>`;
        return div;

    }

    return getCard()
}