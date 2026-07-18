let nameInput = document.querySelector("#name");
let value = sessionStorage.getItem("input-name")

if (value)
  nameInput.value = value;

nameInput.onblur = function () {
  // console.log(this.value);
  window.sessionStorage.setItem("input-name", this.value);
};
