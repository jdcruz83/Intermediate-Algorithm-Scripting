//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//Calling this returned function with a single argument will then return the sum:
//var sumTwoAnd = addTogether(2);
//sumTwoAnd(3) returns 5.
//If either argument isn't a valid number, return undefined.

function addTogether(...nums) {
    let [num1, num2] = nums;
    
    if (nums.length === 1 && typeof num1 === 'number') {
        return x => {
            if (typeof x === 'number') {
                 return num1 + x;
            }
        }
    }
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
}

addTogether(2, 3);
addTogether(2)([3]);
console.log(addTogether(2, 3));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));