let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });

    this.classList.add("active");

    allDivs.forEach(function (ele) {
      ele.style.display = 'none';
    });
  };
});