let counter = document.querySelector(`input`);
let result = document.querySelector(`.result`);

counter.addEventListener("input", (event) => {
  result.innerHTML = `{${event.target.value === "" ? "0" : event.target.value}} USD Dollar = {${Number(event.target.value * 50).toFixed(2)}} Egyptian Pound`;
});
