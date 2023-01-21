/* function pour le dropdown*/

const ddbtn = document.querySelectorAll(".ddbtn");
ddbtn.forEach((btn) => btn.addEventListener("click", openDropdown));





function openDropdown(e) {
    e.preventDefault();
    const selector = e.target.parentNode;
    const ddmenu = selector.lastElementChild;
    if (ddmenu.classList.contains('inactive') === true) {
        ddmenu.classList.remove('inactive');

        ddmenu.classList.remove('d-none');
        ddmenu.classList.add('d-flex')
        ddmenu.classList.add('active')
    } else {
        ddmenu.classList.remove('d-flex');
        ddmenu.classList.remove('active');
        ddmenu.classList.add('inactive');
        ddmenu.classList.add('d-none');
    }
}