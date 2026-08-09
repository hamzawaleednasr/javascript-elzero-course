let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

let [,,,[a,,[,b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal