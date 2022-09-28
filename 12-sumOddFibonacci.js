//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    //variables
    let result = 0;
    let fibSeq = [1, 0];
    let odds = [];
    //get fibonacci sequence
    if (num < 1) {
        return 0;
    } else if (num <= 2) {
        return 1;
    } else {
        let num1 = 0, num2 = 1, nextNum;
        nextNum = num1 + num2;
        while (nextNum <= num) {
            fibSeq.push(nextNum);
            num1 = num2;
            num2 = nextNum;
            nextNum = num1 + num2;
        };       
    };
    //extract odd numbers from fibonacci sequece
    odds = fibSeq.filter((n) => n % 2 === 1);
    //get the sum of odd number array
    result = odds.reduce((a, b) => a + b, 0);
    //
    return result;
};


//debug
//sumFibs(4);
//sumFibs(1);
//sumFibs(1000);
//sumFibs(4000000);
//sumFibs(75024);
//sumFibs(75025);

console.log(sumFibs(4), 5);
console.log(sumFibs(1), 1);
console.log(sumFibs(1000), 1785);
console.log(sumFibs(4000000), 4613732);
console.log(sumFibs(75024), 60696);
console.log(sumFibs(75025), 135721);
