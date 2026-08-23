let mySet = new Set([1, 2, 3, 4, "A", "A"]);

console.log(mySet);
console.log(mySet.size);

let iterator = mySet.keys();

console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

mySet.forEach(e => console.log(e));

console.log('#'.repeat(40));

let weakSet = new WeakSet([ {n: "noor", a: 20}, {n: "hamza", a: 10} ]);

console.log(weakSet);
