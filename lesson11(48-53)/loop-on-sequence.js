let myFriends = [1, 2,  "Hamza", "Emad", "Fathy", "Omar"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === 'string') {
        onlyNames.push(myFriends[i]);
    }
}

console.log(onlyNames);