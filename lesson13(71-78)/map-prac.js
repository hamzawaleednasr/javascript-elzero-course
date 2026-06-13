let swappingCases = "elZERo";

let swapped = swappingCases.split("").map(letter => {
  return letter.toUpperCase() === letter ? letter.toLowerCase() : letter.toUpperCase();
}).join("");

console.log(swapped);

// ------------------------
// ------------------------
// ------------------------

let invertedNumbers = [1, -10, -20, 15, 100, -30];

let inverted = invertedNumbers.map(x => -x);

console.log(inverted);

// ------------------------
// ------------------------
// ------------------------

let ignoreNumbers = "Elz123er4o";

let ignored = ignoreNumbers.split("").map(x => isNaN(x) ? x : "").join("");

console.log(ignored);
