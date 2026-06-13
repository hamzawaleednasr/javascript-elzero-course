let numbers = [10, 20, 15, 50, 25];

let sum = numbers.reduce((acc, current, index, arr) => acc + current, 5);

console.log(sum);
