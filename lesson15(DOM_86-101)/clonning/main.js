let myP = document.getElementById("my-p").cloneNode(true);
let myDiv = document.getElementById("my-div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);