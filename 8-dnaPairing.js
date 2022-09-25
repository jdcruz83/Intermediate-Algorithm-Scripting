//Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
//The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
//For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    let myArr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            myArr.push([str[i], "T"]);
        } else if (str[i] === "T") {
            myArr.push([str[i], "A"]);
        } else if (str[i] === "C") {
            myArr.push([str[i], "G"]);
        } else if (str[i] === "G") {
            myArr.push([str[i], "C"]);
        }
    };
    return myArr;
}

pairElement("GCG");
console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));