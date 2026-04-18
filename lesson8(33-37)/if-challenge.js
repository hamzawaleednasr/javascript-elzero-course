// Challenge 1

let a = 10;

a < 10
  ? console.log(10)
  : a >= 10 && a < 40
    ? console.log("10 to 40")
    : a > 40
      ? console.log("> 40")
      : console.log("Unknown");

// Challenge 2

let st = "Elzero Web School";

if (String(st.length + st.length) === "34") {
    console.log("Good");
}

if (st[st.toLowerCase().indexOf("w")].toLowerCase() === "w") {
    console.log("Good");
}

if (st !== "string") {
    console.log("Good");
}

if (String(typeof st.length) === "number") {
    console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}