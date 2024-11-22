// 4 core concepts of OOP
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// sphegetti code = too much inter-dependency between functions

// object = functions + variables { properties + methods }

// Encapsulation = grouping variables and functions that operate on them into a single unit/object. This is what we call ENCAPSULATION

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

//encapsulation
let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();