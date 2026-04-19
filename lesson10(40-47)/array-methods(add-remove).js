let myFriends = ["Omar", "Ayoub", "Asim", "Yousef"];

myFriends.unshift("Sayed", "Alaa", "Hosny");
console.log(myFriends);

myFriends.push("Samah", "Eman");    
console.log(myFriends);

let first = myFriends.shift();
console.log(myFriends);
console.log(`The first was ${first}`);

let last = myFriends.pop();
console.log(myFriends);
console.log(`The last was ${last}`);