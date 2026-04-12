var a = 1;
var a = 2;
a = 3;
console.log(a);

let b = 1;
// let b = 2; -- SyntaxError
b = 3;
console.log(b);

const c = 1;
// const c = 2; -- SyntaxError
// c = 3; -- TypeError
console.log(c);

for (let i = 0; i < 3; i++) {
    // here try to use 'let' and 'var' and see results!
    var a = 0;
}
console.log(a);

var d;
console.log(d);