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