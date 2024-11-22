/**
 * 1. Objects are collections of key-value pairs.
 */

let person = {
    name : "Adnan",
    age: 22,
    sports: ["Basketball", "Football"],
    print: function() {
        console.log(this);
    },
    incrementAge: function () {
        this.age += 1;
    }
}

console.log(person.age);

person.age += 1;
person.name += " M. Yunus";
person.sports.push("Jiu-Jitsu");
console.log(person);


person.incrementAge();
person.print();