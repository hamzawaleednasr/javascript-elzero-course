for (let i = 1; i <= 100; i++) {
  let mainDiv = document.createElement("div");
  mainDiv.className = "product";

  let divH3 = document.createElement("h3");
  let h3Text = document.createTextNode(`Product ${i}`);
  divH3.className = "title";
  divH3.appendChild(h3Text);

  let divP = document.createElement("p");
  let pText = document.createTextNode(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, vel!",
  );
  divP.className = "paragraph";
  divP.appendChild(pText);

  mainDiv.appendChild(divH3);
  mainDiv.appendChild(divP);

  document.body.appendChild(mainDiv);
  document.write("<hr />");
}
