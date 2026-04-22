let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrTwo[arrTwo.indexOf("Z")], arrOne.reverse(), arrTwo.reverse().slice(arrTwo.indexOf("B")))

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]