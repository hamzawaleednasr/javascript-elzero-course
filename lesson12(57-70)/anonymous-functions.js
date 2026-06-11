let calculation = function (num1, num2) {
  return num1 + num2;
};

console.log(calculation(20, 10)); // must call it after initialize.

document.getElementById("Show").onclick = function () {
  console.log("Show");
};

setTimeout(function () {
  console.log("Time out");
}, 2000);
