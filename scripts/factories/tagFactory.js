export function createTags(value) {



    const div = document.createElement('div');
    div.className = "p-2 rounded d-flex align-items-center tag-item";
    div.setAttribute('style', 'width:150px;');
    div.innerHTML = `<p class="text-light m-0 text-truncate col-10">${value}</p><i class="fa-regular fa-circle-xmark text-light m-0 col-2 text-align-center cursor-p close-btn"></i>`;
    return div

}

/*export function closeTag(event, array, list) {
    event.preventDefault();
    const spans = list.childNodes;
    const value = event.target.parentNode.firstChild.textContent;

    spans.forEach((span) => {
        if (span.textContent === value) {

        }
    });

    //console.log(array);
    //console.log(event.target.parentNode.firstChild.textContent);
    //console.log(list.childNodes);

}*/