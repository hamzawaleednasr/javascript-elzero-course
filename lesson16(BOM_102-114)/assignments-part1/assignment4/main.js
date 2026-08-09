let div = document.getElementsByClassName("counter")[0];

let counter = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML === "0")
    clearInterval(coutner);
    window.location = "https://elzero.org";
}, 1000);

