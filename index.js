//VARIABLES
//variable cannot be a reserved keyword
//should be meaningful
//cannnot start with a number
//vaiable names cannot contain a space or hyphen
//case-sensitive

let names = "John";
console.log(names);

//let firstname;
let Firstname = 'ron', lastname, helo = 'hello';

CONSTANTS
const insterestRate = 0.3;
insterestRate = 1;
console.log(insterestRate);

//PRIMITIVE TYPES/value types

let name = 'Mosh'; //String Literal
let age = 30; //Number Literal
let isApproved = false; //Boolean Literal
let firstname = undefined;
 let selectedColor = null;

//REFERENCE TYPING
//object, array, functions

//object
let person = {
    name: 'Mosh',
    age: 30
};

//Dot Notation
person.name = 'John';

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

//ARRAY

let selectedColors = ['red', 'blue'];
selectedColors[2] =1;
console.log(selectedColors[2]);


//FUNCTIONS
Performing a task
function greet(name, lastname) {
    console.log('Hello ' + name + " " + lastname);
}

greet("John", 'Smith');
greet("marry");

// //Calculating a value
function square(number) {
    return number * number;
}

console.log(square(79));
console.log is also a function call;