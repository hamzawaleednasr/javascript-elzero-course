function sayMessage(fName, lName) {
  let msg = "Hello";

  function contactMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }

    return `${msg} ${getFullName()}`;
  }

  return contactMsg();
}

console.log(sayMessage("Hamza", "Waleed"));