/**
 * Control Flow is Javascript
 * 1. Logical Operators
 * 2. If and Else
 */

// Logical operators - not, and , or
let sumAll = 0;
for(let i = 0; i <= 10; i++) {
    sumAll += i;
}

let sumEven = 0;
for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) sumEven += i;
}

console.log(sumAll, sumEven);

/**
 * Ride - you have to be 4.5 feet tall and 8 years old
 */

let height = 4.6;
let age = 10;

if(height >= 4.5 && age >= 8) {
    console.log("You are good to go!");
}

else if(height >= 4.5) {
    console.log("You are not above 8 years old!");
}

else if(age >= 8) {
    console.log("You are not above 4.5 feet!");
}
else {
    console.log("You do not have both requirements!");
}