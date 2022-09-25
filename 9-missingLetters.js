//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    //Var
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    //Case there's no missing letter;
    if (str.length === alphabet.length) {
      return undefined;
    }
  
    return str;
  }
  
  //fearNotLetter("abce");
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("abcdefghjklmno"));
  console.log(fearNotLetter("stvwx"));
  console.log(fearNotLetter("bcdf"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));