let myIdElement = document.getElementById("title");
let myClassElements = document.getElementsByClassName("span");
let myTagElements = document.getElementsByTagName("p");
let myTagNSElements = document.getElementsByTagNameNS("*", "h1");
let myRootNode = document.getRootNode();
let myQueryElement = document.querySelector("html body .special");
let myQueryAllElements = document.querySelectorAll("span");

console.log(myIdElement);
console.log(myClassElements[0]);
console.log(myTagElements[1]);
console.log(myTagNSElements[0]);
console.log(myRootNode);
console.log(myQueryElement);
console.log(myQueryAllElements);
myIdElement.innerHTML = "NO Please . . . . ."

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].username.value);
console.log(document.links[1].href);
