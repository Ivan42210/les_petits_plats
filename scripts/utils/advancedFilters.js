export function filterSearchBar(arrays, value, output) {

    const search = arrays.filter(function(arr) { return arr.name.toLowerCase().indexOf(value.toLowerCase()) != -1; })
    output = Object.values(search)
}

export function filterIng(arrays, arrayComp, output) {

    const IngFilter = arrays.filter
}