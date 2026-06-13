let myString = "EElllzzzzzzzeroo";

let elzero = myString.split("").filter((l, i) => myString[i + 1] !== l).join("");

console.log(elzero); // Elzero