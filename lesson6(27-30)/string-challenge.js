let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

console.log(a.charAt(13).toUpperCase().repeat(8));

console.log(a.split(" ", 1));

console.log(`${a.substr(0, 6)} ${a.substr(-6)}`);

console.log(`${a.charAt(0).toLowerCase()}${a.slice(1, -1).toUpperCase()}${a.charAt(a.length - 1).toLowerCase()}`);