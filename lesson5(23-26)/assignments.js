// Assignment 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000.0); // 100000
console.log(Math.floor(100000.234)); // 100000
console.log(Math.ceil(99999.3)); // 100000
console.log(1e5); // 100000
console.log(1e2 * 1e3); // 100000
console.log(1e6 / 1e1); // 100000
console.log(100001 - 1); // 100000
console.log(100100 - 1_00); // 100000
console.log(parseInt("100000.192")); // 100000
console.log(1e2 ** 2 * 1e1); // 100000

// Assignment 2

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Assignment 3

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// Assignment 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// Assignment 5

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// Assignment 6

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

// Assignment 7

console.log(Math.floor(Math.random() * 5));