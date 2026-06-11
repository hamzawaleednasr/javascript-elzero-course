function showInfo(username = "Un", age = "Un", rate = 0, show = "Yes", ...skills) {
  document.write(`<div>`);
  document.write(`<h1>Hi, ${username}! </h1>`);
  document.write(`<h3>Your age is ${age}! </h3>`);
  document.write(`<h3>Rate: $${rate} </h3>`);

  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<h3>Skills: ${skills.join(" | ")}</h3>`);
    } else {
      document.write(`<h3>Skills: No Skills</h3>`);
    }
  } else {
    document.write(`<h3>Skills are hidden</h3>`);
  }

  document.write(`</div>`);
}

showInfo("Hamza", 19, 20, "Yes", "HTML", "CSS", "Python");