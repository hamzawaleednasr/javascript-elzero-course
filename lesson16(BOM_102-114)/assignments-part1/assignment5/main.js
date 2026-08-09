let div = document.getElementsByClassName("counter")[0];

let counter = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML === "5")
    window.open(
      "https://elzero.org",
      "_blank",
      "width=600,height=600,left=200,top=100,resizable=yes,scrollbars=yes",
    );
  else if (div.innerHTML === "0") clearInterval(counter);
}, 1000);
