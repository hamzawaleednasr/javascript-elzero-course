let div = document.getElementById("myDiv");

document.body.style.cssText = `
  margin: 0;
  padding: 0;
`;

div.style.cssText = `
  color: red;
  font-size: 5rem;
  font-family: 'Arial';
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0")
    clearInterval(counter);
}

let counter = setInterval(countdown, 1000);