// let user = {
//   age: 20,
// };

// With new keyword

let user = new Object({
  age: 20,
});

console.log(user);

user.age = 10;
user["country"] = "Egypt";

console.log(user);
