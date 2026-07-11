let element = document.getElementById("div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "background-color: yellow; font-size: 30px;";

element.style.removeProperty("background-color");
element.style.setProperty("text-align", "center", "important");

document.styleSheets[0].rules[0].style.removeProperty("margin");
document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");