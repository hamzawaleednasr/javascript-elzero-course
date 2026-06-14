let user = {
  name: "Hamza",
  age: 18,
  skills: ["HTML", "CSS", "JS"],
  available: false,

  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "cairo",
      two: "giza",
    },
  },

  checkAv: _ => user.available ? `Free for work` : `Not free`, 
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.two);
console.log(user["addresses"]["egypt"]["two"]);
