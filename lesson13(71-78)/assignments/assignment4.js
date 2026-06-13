let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newArray = numsAndStrings.filter(l => !isNaN(l)).map(l => -l);

console.log(newArray); // [-1, -10, 10, 20, -5, -3]