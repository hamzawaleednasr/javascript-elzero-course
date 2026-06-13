let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let biggestWord = theBiggest.reduce((acc, current) => current.length > acc.length ? current : acc);

console.log(biggestWord);

// -----------------------------
// -----------------------------

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let word = removeChars.filter(letter => letter !== "@").reduce((acc, current) => acc + current);

console.log(word);
