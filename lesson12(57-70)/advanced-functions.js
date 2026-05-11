function sayHello(name, age) {
  if (age < 20) {
    console.log("App is not suitable for you :-(");
  } else {
    console.log(`Hello, ${name}!`);
  }
}

sayHello("Hamza", 18);
sayHello("Osama", 45);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) continue;
    console.log(i);    
  }
}

generateYears(2020, 2026, 2022)