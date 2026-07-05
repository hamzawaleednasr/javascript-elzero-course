let one = document.getElementById("username");
let two = document.getElementById("age");

window.onload = function () {
  one.focus();
}

two.onblur = function () {
  document.links[0].click();
}