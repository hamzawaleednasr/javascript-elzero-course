let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  let [ { title: t, age: a, available, skills: [,second] } ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(available ? "Available" : "Not available");
  console.log(second);  
} else if (chosen === 2) {
  let [ ,{ title: t, age: a, available, skills: [,second] } ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(available ? "Available" : "Not available");
  console.log(second);  
} else if (chosen === 3) {
  let [ ,,{ title: t, age: a, available, skills: [,second] } ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(available ? "Available" : "Not available");
  console.log(second);  
}
