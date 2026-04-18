let theName = "Hamza";
let theGender = "Male";
let theAge = 18;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);

document.write(`
    <h1>Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}</h1>
`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
    ? console.log("Between 20 and 60")
    : theAge > 60
      ? console.log(60)
      : console.log("Unknown");
