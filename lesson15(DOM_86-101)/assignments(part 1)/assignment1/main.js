let e = document.getElementById("elzero"); // 1
console.log(e);
e = document.getElementsByClassName("element")[0]; // 2
console.log(e);
e = document.getElementsByName("js")[0]; // 3
console.log(e);
e = document.getElementsByTagName("div")[0]; // 4
console.log(e);
e = document.querySelector("div"); // 5
console.log(e);
e = document.querySelector("#elzero"); // 6
console.log(e);
e = document.querySelector(".element"); // 7
console.log(e);
e = document.querySelector(`[name="js"]`); // 8
console.log(e);
e = document.querySelectorAll("div")[0]; // 9
console.log(e);
e = document.querySelectorAll("#elzero")[0]; // 10
console.log(e);
e = document.querySelectorAll(".element")[0]; // 11
console.log(e);
e = document.querySelectorAll(`[name="js"]`)[0]; // 12
console.log(e);
e = document.body.firstChild; // 13
console.log(e);
e = document.body.firstElementChild; // 14
console.log(e);
e = document.body.children[0]; // 15
console.log(e);
e = document.body.childNodes[0]; // 16
console.log(e);
