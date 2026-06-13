let sentence = "I Love Foood Code Too Playing Much";

let filtered = sentence.split(" ").filter(word => word.length < 5).join(" ");

console.log(filtered);

// ------------------------------
// ------------------------------

let mix = "A13BS2ZX";

let numbers = mix.split("").filter(e => !isNaN(e)).map(e => e * e).join("");

console.log(numbers);
