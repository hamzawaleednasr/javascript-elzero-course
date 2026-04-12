// Add Variables Here
let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log(numberOne.toString() + numberTwo.toString()); // Normal Concatenate => 1020
console.log(typeof (numberOne.toString() + numberTwo.toString())); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo.toString() + "\n" + numberOne.toString());
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/
