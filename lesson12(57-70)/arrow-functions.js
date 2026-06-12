let print = function () {
  return 10;
}

console.log(print());

let print2_1 = () => {
  let number = 10;
  return number;
};

let print2_2 = () => 10;

let print2_3 = _ => 10;

console.log(print2_1());

let print3 = (num1, num2) => num1 + num2;
console.log(print3(10, 20));

let print4 = num => num;
console.log(print4(1));