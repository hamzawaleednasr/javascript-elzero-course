// "use strict" // comment and uncomment and see the outputs . . .

function normalMode(a, a, c) {
  return a + a + c;
}

console.log(normalMode(1, 2, 4));

let x = {
  y: 1,
  // y: 2,
};

console.log(x.y);

function nmlMd() {
  console.log(this);
}

nmlMd();