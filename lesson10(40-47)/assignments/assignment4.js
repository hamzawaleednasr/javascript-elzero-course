let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.at(- words.indexOf("Facebook"))[0].slice(website.length).toUpperCase()); // ZERO