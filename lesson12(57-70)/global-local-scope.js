var a = 1;
let b = 2;

function scope() {
  var a = 10;
  let b = 20;
  console.log(`Function - from local ${a}`);
  console.log(`Function - from local ${b}`);
}

console.log(`from global ${a}`);
console.log(`from global ${b}`);
