/*dropdown result*/

export function advancedFilters(arrays, value, output) {


    const result = arrays.filter(function(arr) { return arr.name.toLowerCase().indexOf(value.toLowerCase()) != -1 })

    output.push(result)


}

/*   if (ing.ingredient.toLowerCase().indexOf(value) != -1) {
               resultTest.push(arrays.map((arr) => arr));
               console.log(resultTest)

           }*/