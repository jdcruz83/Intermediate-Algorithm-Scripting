function sumAll(arr) {
    let result = 0;

    if (arr[0] > arr[1]) {
        arr.sort((a, b) => a - b);
    }

    for (let i = arr[0]; i <= arr[1]; i++) {
        result += i;
    }

    return result;
}

sumAll([1, 4]);
console.log(sumAll([1, 4]));