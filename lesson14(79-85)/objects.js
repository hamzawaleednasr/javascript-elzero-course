let myVar = "country of";

let user = {
  theName: "Hamza",
  theAge: 18,
  "country of": "Egypt",
  100: "salary",

  sayHello: _ => `Hello`,
}

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());
console.log(user["country of"]);
console.log(user[myVar]);
console.log(user["100"]);
