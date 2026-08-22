const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const { theName: n, theAge: a, skills, addresses: { egypt: eg } } = user;

console.log(n);
console.log(a);
skills.forEach(s => console.log(s));
console.log(eg);
