setTimeout((name) => console.log(`I'm ${name} message.`), 2000, "Hamza");
setTimeout((name) => console.log(`I'm ${name} message.`), 2000, "Omar");

let counter = setTimeout(() => console.log("I'm MSG"), 3000);

let btn = document.querySelector("button");

btn.onclick = () => clearTimeout(7);