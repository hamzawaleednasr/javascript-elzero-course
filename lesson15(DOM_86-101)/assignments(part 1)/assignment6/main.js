let number = document.querySelector(`[name="elements"]`);
let text = document.querySelector(`[name="texts"]`);
let select = document.querySelector(`[name="type"]`);

let results = document.querySelector(".results"); 

document.forms[0].onsubmit = function (e) {
  e.preventDefault();

  let isValid = false;

  results.innerHTML = "";
  
  if (number.value !== "" && text.value !== "")
    isValid = true;
  
  if (isValid) {
    for (let i = 0; i < Number(number.value); i++) {
      results.innerHTML += `
        <${select.value} class="box" title="Element" id="id-${i+1}">${text.value}</${select.value}>  
      `;
    }
  }
}