let btn = document.querySelector("button");

document.body.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
