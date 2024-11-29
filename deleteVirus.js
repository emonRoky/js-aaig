function deleteInvalids(arr) {
    if (!Array.isArray(arr)) {
        return 'Invalid';
    }
    const result = []
    for (const item of arr) {
        if (typeof item == 'number' && !isNaN(item)) {
            result.push(item);
        }
    }
    return result
}
let finalArray = deleteInvalids([1, null, undefined, 18,
    -19, NaN,
    "12"
    , [1, 2], { ob: "lala" } ]);
console.log(finalArray);
