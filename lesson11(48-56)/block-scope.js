var x = 10;

if (true) {
  var x = 20; // override the global x, because 'var' isn't a block variable
}

console.log(x);

let y = 10;

if (true) {
  let y = 20;
  console.log(y);
}

console.log(y);
