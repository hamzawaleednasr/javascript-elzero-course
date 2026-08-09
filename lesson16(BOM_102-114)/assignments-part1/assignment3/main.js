let div = document.getElementsByClassName("counter")[0];

let counter = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML === "0")
    clearInterval(counter); 
}, 1000);

