//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  //Var
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  str = str.split(""); // turn string to array
  
  //Case there's no missing letter;
  if (str.length === alphabet.length) {
    return undefined;
  } else {

    //Get initial and final letters as they are provided in order
    let firstLetter = str[0]; // ok
    let lastLetter = str[str.length - 1]; // ok

    //search alphabet for first and last letter indexes
    let firstPos = alphabet.indexOf(firstLetter); // ok
    let lastPos = alphabet.indexOf(lastLetter); // ok

    //retrive the complete string from initial to final / string to array
    let alphaArr = alphabet.slice(firstPos, lastPos + 1);
    
    //filter strings for letter missing; // turn to string
    let myArr = alphaArr.filter(i => !str.includes(i)).join();
    str = myArr;

    //debug...
    //console.log(alphabet);
    //console.log(firstPos, firstLetter);
    //console.log(lastPos, lastLetter);
    //console.log(alphaArr);
    //console.log(myArr);
  }
  return str;
}

fearNotLetter("abce");
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));