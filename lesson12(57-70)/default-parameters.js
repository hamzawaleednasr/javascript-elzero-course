function sayHello(username = "Uknown", age = "Uknown") {
  if (age === undefined) {
    age = "Uknown";
  }
  age = age || "Uknown";
  console.log(`Hello ${username} your age is ${age}`);
}

sayHello("Hamza", 19);