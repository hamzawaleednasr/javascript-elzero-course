let myFriends = ["Hassan", "3antra", "Al-Motanaby", "Jareer", "Hassan"];

console.log(myFriends.indexOf("Hassan"));
console.log(myFriends.indexOf("Hassan", 3));
console.log(myFriends.indexOf("Hassan", -2));

console.log(myFriends.lastIndexOf("Hassan"));
console.log(myFriends.lastIndexOf("Hassan", -2));
console.log(myFriends.lastIndexOf("Hassan", 3));

console.log(myFriends.includes("Jareer"));
console.log(myFriends.includes("Jareer", -1));

if (myFriends.lastIndexOf("Hamza") === -1) {
    console.log("Hamza isn't found!\n");
} 

console.log(myFriends.lastIndexOf("Hamza"));