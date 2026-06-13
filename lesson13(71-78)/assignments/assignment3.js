let myArray = ["E", "l", "z", ["e", "r"], "o"];

let elzero = myArray.reduce((acc, current) => acc + current).split("").filter(l => l !== ",").join("");

console.log(elzero); // Elzero