function specialMix(...data) {
  let result = 0;
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    let number = parseInt(data[i]);
    if (Number.isInteger(number)) {
      result += number;
      counter++;
    }
  }

  return counter === 0 ? "All Is Strings" : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("0Testing", "0Testing", "0Cool")); // 0
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings