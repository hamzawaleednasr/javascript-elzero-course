// document.write("<h1> Page Title </h1>");

// window.alert("hello");

// console.log("Hello from js file");

// console.error("Error!");

// console.table(["Hamza", "Ahmed", "Emad"]);

// console.log("Hello from %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");

// var my_name = "Hamza";

// console.log(`Hello ${my_name}`);

// Second Assignment

// -- first way --
document.write(
  '<h1 style="color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial "> Elzero </h1>',
);

// -- second way --
document.write('<h1 id="text"> Hamza </h1>');
document.getElementById("text").style.color = "blue";
document.getElementById("text").style.fontSize = "80px";
document.getElementById("text").style.textAlign = "center";
document.getElementById("text").style.fontFamily = "Arial";
document.getElementById("text").style.fontWeight = "Bold";

// Third Assignment
console.log(
  "%cElzero %cWeb %cSchool",
  "font-size: 40px; color: red;",
  "font-size: 40px; color: green; font-weight: bold;",
  "font-size: 40px; background-color: blue; color: white;",
);

// Fourth Assignment
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

// Fifth Assignment
console.table(["Hamza", "Ali", "Ahmed", "Esmat"]);

window.onload = function () {
  this.document.querySelector("").style.color = "red";
};
