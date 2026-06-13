let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let elzero = mix.map(l => isNaN(l) ? l : "").reduce((acc, current) => acc + current);

console.log(elzero); // Elzero