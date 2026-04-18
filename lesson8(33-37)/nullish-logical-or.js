let price = 0;

console.log(`The price is ${price || 200}`); // return 200 when price is null or undefined or any falsy value
console.log(`The price is ${price ?? 200}`); // return 200 when price is null or undefined only
