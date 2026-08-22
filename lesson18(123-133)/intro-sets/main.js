let myData = [1, 1, 1, 2, 3, "A"];
// let mySet = new Set([1, 1, 1, 2, 3, "A"]);
// let mySet = new Set(myData);
// let mySet = new Set().add(1).add(1).add(1).add(2).add(3).add("A");
let mySet = new Set();

mySet.add(1).add(1).add(1);
mySet.add(2).add(3).add("A");

console.log(`Is set has 'A' => ${mySet.has("A")}`);

console.log(myData);
console.log(mySet);

console.log(mySet.size);

console.log(mySet.delete(1));
console.log(mySet.delete(5));

console.log(mySet);
console.log(mySet.size);

mySet.clear();

console.log(mySet);
console.log(mySet.size);