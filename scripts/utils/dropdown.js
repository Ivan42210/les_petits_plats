export function dropdownToggle(event) {
    event.preventDefault()
    const btnParent = event.target.parentNode.parentNode;
    const list = btnParent.lastChild;
    const icon = event.target;


    if (btnParent.classList.contains('inactive')) {
        btnParent.classList.remove('inactive');
        btnParent.classList.add('active');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        list.classList.remove('d-none');
    } else if (btnParent.classList.contains('active')) {
        btnParent.classList.remove('active');
        btnParent.classList.add('inactive');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        list.classList.add('d-none');
    }
}

export function inputOpenFuntion(e) {
    e.stopPropagation();
    const value = e.target.value;
    const parent = e.target.parentNode;
    const icon = e.target.parentNode.childNodes[1].firstChild;
    const list = e.target.parentNode.childNodes[2];
    const spans = e.target.parentNode.childNodes[2].childNodes;



    if (value.length >= 3) {
        spans.forEach((span) => {
            if (span.textContent.indexOf(value) == -1) {
                span.classList.add('d-none')
            }

        })

        list.classList.remove('d-none');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        parent.classList.remove('inactive');
        parent.classList.add('active');


    } else if (value.length < 3) {
        spans.forEach((span) => {

            span.classList.remove('d-none')


        })
        list.classList.add('d-none');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        parent.classList.remove('active');
        parent.classList.add('inactive');
    }





}