let div = document.getElementById("two");

console.log(div.nextSibling);
console.log(div.nextElementSibling);

console.log(div.previousSibling);
console.log(div.previousElementSibling);

console.log(div.parentElement);

div.onclick = () => div.parentElement.remove();
