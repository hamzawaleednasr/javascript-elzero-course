let myFriends = ["Yousef", "Mostafa", "Ayoub", "Hasan"];
let myNewFriends = ["Omar", "Adham", "Ibraheem"];
let schoolFriends = ["Anas", "Hozaifa"];

let allFreinds = myFriends.concat(myNewFriends, schoolFriends, "Hosam", ["Ali", "Ahmed"]);

console.log(allFreinds);

console.log(allFreinds.join());
console.log(allFreinds.join(""));
console.log(allFreinds.join(" "));
console.log(allFreinds.join("|"));
console.log(allFreinds.join("|").toUpperCase());