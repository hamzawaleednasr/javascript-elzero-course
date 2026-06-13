let nums = [1, 2, 3, 4];

let newArray = [];
function duplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    newArray.push(nums[i] + nums[i]);
  }
}
duplicate(nums);
console.log(newArray);

let newArray1 = nums.map(function (element, index, array) {
  return element + element;
}, 10);
console.log(newArray1);

let newArray2 = nums.map(num => num + num);
console.log(newArray2);

function func(num) {
  return num + num;
}
let newArray3 = nums.map(func);
console.log(newArray3);
