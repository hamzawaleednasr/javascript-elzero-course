// - dynamic function to set style values
function setColors() {
  for (let i = 0; i < 4; i++) list.children[i].style.opacity = 0.4;
  box.style.backgroundColor = localStorage.activeColor;
  list.children[localStorage.activeItem].style.opacity = 1;
}

// - get dom elements
let list = document.querySelector(".colors-list");
let box = document.querySelector(".box");

// - get localStorage values
let activeColor = localStorage.getItem("activeColor");
let activeItem = localStorage.getItem("activeItem");

// - set default values or set stored values
if (activeColor === null || activeItem === null) {
  localStorage.setItem("activeColor", "red");
  localStorage.setItem("activeItem", 0);
  activeColor = localStorage.getItem("activeColor");
  activeItem = localStorage.getItem("activeItem");
} else {
  setColors();
}

// - add events
list.children[0].onclick = function () {
  localStorage.setItem("activeColor", "red");
  localStorage.setItem("activeItem", 0);

  setColors();
};
list.children[1].onclick = function () {
  localStorage.setItem("activeColor", "green");
  localStorage.setItem("activeItem", 1);

  setColors();
};
list.children[2].onclick = function () {
  localStorage.setItem("activeColor", "blue");
  localStorage.setItem("activeItem", 2);

  setColors();
};
list.children[3].onclick = function () {
  localStorage.setItem("activeColor", "gray");
  localStorage.setItem("activeItem", 3);

  setColors();
};
