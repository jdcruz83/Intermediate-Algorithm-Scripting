//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    
    let len = arr.length;
    let result = [];

    for (let i = 0; i < len; i++) {
        let currentElement = arr[i];
        if (Array.isArray(currentElement)) {
            let flattedArray = steamrollArray(currentElement);
            result.push(...flattedArray);
        } else {
            result.push(currentElement);
        };
    };
    return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);

console.log(steamrollArray([[["a"]], [["b"]]]), ["a", "b"]);
console.log(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
console.log(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
console.log(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);