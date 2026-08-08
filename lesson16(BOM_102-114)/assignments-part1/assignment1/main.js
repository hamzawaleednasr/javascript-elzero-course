let result = prompt("Print Number From - To", "Example: 5-20");
let numbers = result.split("-").map((number) => Number(number));

let from, to;

if (numbers[0] < numbers[1]) {
  from = numbers[0];
  to = numbers[1];
} else {
  from = numbers[1];
  to = numbers[0];
}

for (let i = from; i <= to; i++) 
  console.log(i);