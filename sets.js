/**
 * SETS
 * SETS CAN WORK WITH NON SET ELEMENTS TOO
 */

let a = new Set();
a.add('adan'); // add
a.add('blie');
a.add('Rini');
a.add('Billy');
console.log(a);
console.log(a.has("adani")); //has

let b = new Set();
b.add("Billy");
b.add("james");
b.add("Rini");

let intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection);

let union = new Set([...a, ...b]);
console.log(union);

let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);