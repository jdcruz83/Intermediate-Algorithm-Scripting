/*Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.*/

const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let names = firstAndLast;
    //Getter
    this.getFullName = function () {
        return names;
    }
    this.getFirstName = function () {
        return names.split(' ')[0];
    };
    this.getLastName = function () {
        return names.split(' ')[1];
    }
    //Setter
    this.setFirstName = function(first) {
        names = first + " " + names.split(' ')[1];
    };
    this.setLastName = function(last) {
        names = names.split(' ')[0] + " " + last;
    };
    this.setFullName = function(fullName) {
      names = fullName;
    };
};

const bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob.getFirstName());
console.log(bob.getFullName());
console.log(bob.getLastName());