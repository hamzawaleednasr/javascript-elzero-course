let myFriends = ["Omar", "Ayoub", "Mostafa", "Yousef", "Osama"];

console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(-4, -2));
console.log(myFriends); // NOTE: slice return a new array . . .

myFriends.splice(2, 1, "Hamza", "Ahmed")

console.log(myFriends);