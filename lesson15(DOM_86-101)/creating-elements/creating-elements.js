let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is div");

myElement.className = "product";
myElement.setAttribute("data-test", "Test");
myElement.setAttributeNode(myAttr);

// Append text to the element
myElement.appendChild(myText);

// Append comment to the page
document.body.appendChild(myComment);

// Append to page (body)
document.body.appendChild(myElement);
