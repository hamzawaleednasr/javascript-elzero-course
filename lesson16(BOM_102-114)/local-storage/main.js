// Set
localStorage.setItem("color", "red");
localStorage.fontWeight = "bold";
localStorage["fontSize"] = "20px";

// Get
console.log(localStorage.getItem("color"));
console.log(localStorage.color);
console.log(localStorage["color"]);

// Get Key
console.log(localStorage.key(1));

// Remove One
localStorage.removeItem("fontSize");

// Remove All
// localStorage.clear();

// Use Values
document.body.style.backgroundColor = localStorage.getItem("color");

console.log(localStorage);
console.log(typeof localStorage);
