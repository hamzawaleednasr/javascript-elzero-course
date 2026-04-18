let c = "Learn Code Easily";

console.log(c.substring(6, 10));
console.log(c.substring(10, 6));
console.log(c.substring(-3, 5));

// Note: substr is a deprecated method!
console.log(c.substr(6));
console.log(c.substr(0, 10));
console.log(c.substr(6, 4));
console.log(c.substr(-6, 3));

console.log(c.includes("C"));
console.log(c.includes("C", 7));

console.log(c.startsWith("L"));
console.log(c.startsWith("L", 10));

console.log(c.endsWith("y"));
console.log(c.endsWith("e", 10));