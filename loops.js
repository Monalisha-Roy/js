/***
 * Loops
 * - break and continue
 *  - iterating over 10 and 20 arrays
 * - break : exit out of the loop
 * - continue: skip the iteration of the loop
 */

// let arr = [1, 2, 3, -15, 5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
    
//     if(arr[i] % 2 != 0) {
//         continue;
//     }
//     sum += arr[i];
//     if(sum < 0) {
//         console.log("Negative Sum");
//         break;
//     }
// }

// console.log(sum);

let arrayOneD = [4, 5, 6, 7];
let arrayTwoD = [[2, 4], [2, 4], [5, 4]];

// for( let i = 0; i < arrayOneD.length; i++) {
//     console.log(arrayOneD[i]);
// }

for(let i = 0; i < arrayTwoD.length; i++) {
    console.log(arrayTwoD[i]);
    for(let j = 0; j < arrayTwoD[i].length; j++) {
        console.log(arrayTwoD[i][j]);
    }
    
}

// let j = 0; 
// while(j < 15) {
//     console.log('While Loop Index: ', j);
//     j++;
// }

// let j = 0; 
// do {
//     console.log('Do While Loop Index: ', j);
//     j++;
// } while(j < 15);