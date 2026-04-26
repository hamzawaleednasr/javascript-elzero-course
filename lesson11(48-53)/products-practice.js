let products = ["Mouse", "Keyboard", "Monitor", "Pad", "Pen", "IPhone", "Samsung"];
let colors = ["Red", "Blue", "Green"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
    document.write(`<div>`);
    document.write(`<h2>[${i + 1}] ${products[i]}</h2>`);
    document.write(`<ul>`);
    for (let j = 0; j < colors.length; j++) {
        document.write(`<li>${colors[j]}</li>`);    
    }
    document.write(`</ul>`);
    document.write(colors.join(" | "));
    document.write(`</div>`);
}