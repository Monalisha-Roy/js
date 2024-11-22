// FUNCTIONS IN JAVASCRIPT
var x = 10;
function add(x) {
    x  = 22;
    return x + 1;
}

console.log(add(x));

// inner function 

function isPythagoranTriplet(a, b, c) {
    function square(x) {
        return x*x;
    }
    return square(a) + square(b) == square(c);
}

console.log(isPythagoranTriplet(3, 4, 9));

// HOISTING
// the variables and functions are moved to the top of the code 
// so you can use them in the code without any problem.
// 1. the var are set to undefined.
// 2. the let and const are not initialized
// 3. the functions assigned to variables are also undefined. 
// 4. the functions without teh variables work just fine.

// ARROW FUNCITONS
/**
 * - doesnt need a return 
 * - automatically bounded to this keyword.
 */

// one line func donot need return. But more lines of code would require a return 
const mult = (x, y) => x*y;

console.log(mult(5,6));

// this keywork refers to the context.
// you don't loose the context of this in the inner function if you use the arrow function
let obj = {
    name: 'Adn',
    print: function() {
        var that = this;
        inner = () => {
            console.log(this.name);
        }
        console.log(this.name);
        inner();
    }
}

obj.print();