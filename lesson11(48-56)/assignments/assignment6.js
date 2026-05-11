let start = 0;
let swappedName = "elZerO";

// ELzERo

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swappedName =
      swappedName.slice(start, i) +
      swappedName[i].toLowerCase() +
      swappedName.slice(i + true);
  } else {
    swappedName =
      swappedName.slice(start, i) +
      swappedName[i].toUpperCase() +
      swappedName.slice(i + true);
  }
}

console.log(swappedName); 