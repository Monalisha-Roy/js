/**
 * STRINGS
 * 1. STRING CREATON
 * 2. INDEXING
 * 3. SUBSTRINGS
 * 4. INCLUDES
 * 5. IDNEXOF, LASTINDEXOF
 * 6. SPLIT METHOD
 */

let str = "Billy Bob Joe";

console.log(str[4]); //indexing

console.log(str.substring(6, 8)); //substrings

console.log(str.includes("jow")); // includes gives true or false

console.log(str.indexOf("e"));
console.log(str.lastIndexOf("e"));

console.log(str.split(" ")); // returns an array