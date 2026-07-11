let element = document.getElementById("my-div");
let newParagraph = document.createElement("p");

element.after(newParagraph);
element.before("Hello from JS");

newParagraph.innerHTML = "Paragraph From JS";

element.prepend(newParagraph);
element.append("Bye, bye! (FROM JS)");

element.remove();