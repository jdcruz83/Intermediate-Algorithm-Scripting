//Pig Latin is a way of altering English Words. The rules are as follows:
//- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
//- If a word begins with a vowel, just add way at the end.
//Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    let myStr = "";
    let vowels = ["a", "e", "i", "o", "u"]
    if (vowels.indexOf(str[0]) > -1) {
        myStr = str + "way"
        return myStr
    } else {
        let firstLetter = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstLetter[0]);
        myStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return myStr
    }
}

translatePigLatin("consonant");
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));