let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Mostafa", "Youssef", "Ali", "Omar"];

[a = "A", b, c, d, e = "Elzero", f] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


let [, y, ,z] = myFriends;

console.log(y);
console.log(z);
