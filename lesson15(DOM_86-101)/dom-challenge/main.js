// ======== GENERALS ===================================================
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.fontFamily = "Arial";
document.body.style.backgroundColor = "#eee";

// ======== Creating navbar ===================================================

// - Creating elements
let header = document.createElement("header");
let logoName = document.createElement("p");
let linksList = document.createElement("ul");

let homeLink = document.createElement("li");
let aboutLink = document.createElement("li");
let serviceLink = document.createElement("li");
let contactLink = document.createElement("li");

// - Setting attributes
logoName.innerHTML = "Elzero";
homeLink.innerHTML = "Home";
aboutLink.innerHTML = "About";
serviceLink.innerHTML = "Service";
contactLink.innerHTML = "Contact";

header.className = "navbar";
logoName.className = "logo";
linksList.className = "links";
homeLink.className = "home";
aboutLink.className = "about";
serviceLink.className = "service";
contactLink.className = "contact";

homeLink.id = "home";
aboutLink.id = "about";
serviceLink.id = "service";
contactLink.id = "contact";

// - Link elements
linksList.appendChild(homeLink);
linksList.appendChild(aboutLink);
linksList.appendChild(serviceLink);
linksList.appendChild(contactLink);

header.appendChild(logoName);
header.appendChild(linksList);

// - Styles
logoName.style.cssText = `
  color: #359484;
  font-size: 20px; 
  margin: 0;
  font-weight: bold;
`;

homeLink.style.cssText = `
  color: #84868C;
  font-size: 15px;
  list-style-type: none;
`;
aboutLink.style.cssText = `
  color: #84868C;
  font-size: 15px;
  list-style-type: none;
`;
serviceLink.style.cssText = `
  color: #84868C;
  font-size: 15px;
  list-style-type: none;
`;
contactLink.style.cssText = `
  color: #84868C;
  font-size: 15px;
  list-style-type: none;
`;

linksList.style.cssText = `
  display: flex;
  align-items: center;
  gap: 15px; 
  margin: 0;
`;

header.style.cssText = `
  padding: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

// ======== Hero Section ===================================================

// - Creating elements
let hero = document.createElement("main");
let box = document.createElement("div");

let title = document.createElement("h3");
let subtitle = document.createElement("p");

// - Setting attributes
hero.className = "content";
box.className = "box";
title.className = "title";
subtitle.className = "subtitle";

// - Link elements
box.appendChild(title);
box.appendChild(subtitle);

// - Styles
hero.style.cssText = `
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, 115px);
  gap: 15px;
  align-items: start;
  min-height: 100vh; 
`;

for (let i = 0; i < 15; i++) {
  let boxChild = box.cloneNode(true);
  boxChild.firstElementChild.innerHTML = `${i + 1}`;
  boxChild.lastElementChild.innerHTML = `Product`;

  boxChild.style.cssText = `
    background-color: white;
    padding: 10px 15px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;

  boxChild.firstElementChild.style.cssText = `
    font-size: 2rem;
    margin: 15px;
  `;

  boxChild.lastElementChild.style.cssText = `
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    color: #A7A4A4;
  `;

  hero.appendChild(boxChild);
}

// ======== Footer ===================================================

// - Add elements
let footer = document.createElement("footer");
let text = document.createElement("p");

// - Setting attributes
footer.className = "footer";
text.className = "footerText";

text.innerHTML = "Copyright 2026"

// - Link elements
footer.appendChild(text);

// - Styles
footer.style.cssText = `
  background-color: #359484;
  padding: 25px 25px;
`;

text.style.cssText = `
  font-size: 1.75rem;
  color: white;
  text-align: center;
  margin: 0;
`;

// ======== Add to page ===================================================
document.body.append(header);
document.body.append(hero);
document.body.append(footer);
