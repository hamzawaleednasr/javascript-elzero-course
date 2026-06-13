function showDetails(p1, p2, p3) {
  let name = typeof p1 === "string" ? p1 : typeof p2 === "string" ? p2 : p3;
  let age = typeof p1 === "number" ? p1 : typeof p2 === "number" ? p2 : p3;
  let isAvailable = typeof p1 === "boolean" ? p1 : typeof p2 === "boolean" ? p2 : p3;

  console.log(
    `Hello ${name}, Your age is ${age}, You are ${isAvailable ? "" : "not"} available for hire.`
  );
}

showDetails("Hamza", 19, true);
showDetails(19, "Hamza", false);
showDetails(true, 19, "Hamza");
showDetails(false, "Hamza", 19);