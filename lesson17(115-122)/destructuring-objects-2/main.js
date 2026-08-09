let user = {
  theName: "Hamza",
  theAge: 25,
  theTitle: "Developer",
  theCountry: "Egypt",
  skills: {
    html: 80,
    css: 70,
  },
};

const { theName: n, theAge: a, theColor: c = "Red", skills: { html: h, css } } = user;

console.log(n);
console.log(a);
console.log(c);
console.log(h);
console.log(css);