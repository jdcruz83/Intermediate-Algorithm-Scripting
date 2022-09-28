//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let result = max;

    let smallCommon = function(low, high) {
        function scm(l, h) {
            if (h % l === 0) {
                return h;
            } else {
                return scm(l, h + high);
            }
        }
        return scm(low, high);
    };

    for (let i = min; i <= max; i += 1) {
        result = smallCommon(i, result);
    };

    return result;
}

smallestCommons([1, 5]);


console.log(smallestCommons([1, 5]), 60);
console.log(smallestCommons([5, 1]), 60);
console.log(smallestCommons([2, 10]), 2520);
console.log(smallestCommons([1, 13]), 360360);
console.log(smallestCommons([23, 18]), 6056820);