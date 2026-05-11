let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let len = 0;
while (myAdmins[len] !== "Stop") {
  len++;
}

document.write(`<div>We Have ${len} Admins</div> <hr>`);

for (let i = 1; i <= len; i++) {
  document.write(`<div>The admin for team ${i} is ${myAdmins[i - 1]}</div>`);
  document.write(`<h3>Team Members:</h3>`);
  
  for (let j = 1; j <= myEmployees.length; j++) {
    if (myEmployees[j - 1][0] === myAdmins[i - 1][0]) {
      document.write(`<p>- ${myEmployees[j - 1]}</p>`);
    }
  }

  document.write(`<hr>`);
}