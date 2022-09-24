function spinalCase(str) {
    let spinal = str
        .replace(/(?!^)([A-Z])/g, ' $1')
        .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
    return spinal
    
    /// Another solution - my first, but couldn't get regexp to work. Fixed it later. 
  /*return str
    .trim()
    .split(/\s|_|(?=[A-Z])/) // (/\W|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();*/  
     
}

spinalCase('This Is Spinal Tap');
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));