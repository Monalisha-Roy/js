// Sum all even numbers to an input n

let n = 20;
let sum = 0;

sumEven = (n) => {
for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) sum += i;
}
return sum;
}

console.log(sumEven(5));

// return nth fibonacci number

fib = (n) => {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(n));

freqMap = (str) => {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        if(str[i] in map) {
            map[str[i]] += 1;
        }else{
            map[str[i]] = 1;
        }
    }
    return map;
}

console.log(freqMap("Malayalam"));