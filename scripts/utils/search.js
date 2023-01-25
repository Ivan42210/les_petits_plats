export function search(datas) {

    function searchBar() {
        const searchInput = document.getElementById('searchBar');
        searchInput.addEventListener('keyup', (e) => returnResult(e, datas));

        async function returnResult(e, datas) {
            e.preventDefault();
            const inputValue = searchInput.value;
            if (inputValue.length >= 3) {
                console.log('ta grosse darone');
            }


        }
    }

    searchBar(datas);
}