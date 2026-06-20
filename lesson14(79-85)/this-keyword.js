console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

document.getElementById("b1").onclick = function () {
  console.log(this);
};

function sayHello() {
  return this;
}

console.log(sayHello() === window);

let user = {
  age: 30,

  ageInDays: (_) => this.age * 365,
};
