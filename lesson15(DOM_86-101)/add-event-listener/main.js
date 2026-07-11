let myP = document.getElementById("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Click from one");
// }

// function two() {
//   console.log("Click from two");
// }

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);
// myP.addEventListener("click", function () {
//   console.log("From event");
// });
// myP.addEventListener("click", () => console.log("From Event 2 {Lambda Expression}"));

myP.addEventListener("click", function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
});

// let clonedP = document.getElementsByClassName("clone")[0]; // Error

// clonedP.addEventListener("click", () => console.log("I'm a Clone"));

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I'm a Clone!");
  }
});
