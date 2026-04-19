let myFriends = ["Hamza", "Omar", "Mostafa", "Ayoub", ["Anas", "Hozaifa", "Yousef"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[4]}`);
console.log(myFriends[2][6]);
console.log(`Hello ${myFriends[4][1]}`);
console.log(myFriends[4][1][2].toUpperCase());

myFriends[0] = "Ibraheem";
console.log([...myFriends]); // print a copy from array not a reference
myFriends[4] = "Alaa";
console.log(myFriends);

console.log(Array.isArray(myFriends));