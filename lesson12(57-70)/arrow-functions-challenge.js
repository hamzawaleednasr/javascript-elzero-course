// let names = function (...n) {
//   return `String [${n.join("], [")}] => Done !`;
// };
let names = (...n) => `String [${n.join("], [")}] => Done !`;

console.log(names("Hamza", "Omar", "Ayoub", "Mostafa", "Yousef"));

//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[true - true];
function calc(one, two, ...nums) {
  return one + two + nums[true - true];
}

console.log(calc(10, 50, 20)); // 80
