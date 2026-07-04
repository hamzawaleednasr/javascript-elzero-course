let myDiv = document.querySelector(".html");

console.log(myDiv.attributes);

if (myDiv.hasAttribute("data-src")) {
  myDiv.removeAttribute("data-src");
} else {
  console.log(`Not Found`);
}

if (myDiv.hasAttributes()) {
  console.log("Yes, has attributes");
} else {
  console.log("No, hasn't attributes");
}

if (document.getElementsByTagName("h2")[0].hasAttributes()) {
  console.log("Yes, has attributes");
} else {
  console.log("No, hasn't attributes");
}
