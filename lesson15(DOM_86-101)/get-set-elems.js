let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Hello From <span>Main.js</span> File";
myElement.textContent = "Hello From <span>Main.js</span> File";

document.images[0].src = "https://fastly.picsum.photos/id/509/536/354.jpg?hmac=4UQRIwxVyBgVhTw1OLamrqD2MNfqDrk6hJQj1wJ_MGA";
document.images[0].alt = "Image";
document.images[0].title = "Image Title";
document.images[0].id = "pic";
document.images[0].className = "img";
document.images[0].style.width = "100px";

let myLink = document.querySelector("a");

myLink.setAttribute("class", "link")
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
