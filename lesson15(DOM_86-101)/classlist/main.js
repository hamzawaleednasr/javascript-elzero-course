let element = document.getElementById("div");

console.log(element.classList);
console.log(element.classList.value);
console.log(element.classList.length);
console.log(element.classList.item(0));
console.log(element.classList.item(20));
console.log(element.classList[1]);
console.log(element.classList[20]);
console.log(element.classList.contains("one"));
console.log(element.classList.contains("hamza"));

element.onclick = function () {
  this.classList.add("add-one", "add-two")
}

element.oncontextmenu = function () {
  this.classList.remove("one", "two");
}

element.onmouseenter = function () {
  this.classList.toggle("show");
}