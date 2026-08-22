let user = {
  theName: "Hamza",
  theAge: 20,
  skills: {
    html: 80,
    css: 60,
  },
};

showDetails(user);

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your name is ${n}`);
  console.log(`Your age is ${a}`);
  console.log(`Your css skill progress is ${c}`);
}
