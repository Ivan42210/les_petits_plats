export function removeArray(arrays, value) {
    const index = arrays.indexOf(value);
    if (index > -1) {
        arrays.splice(index, 1);
    } else if (arrays.length === 1) {
        arrays = [];
    }
}