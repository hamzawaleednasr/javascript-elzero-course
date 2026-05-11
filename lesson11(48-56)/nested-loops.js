let products = ["Keyboard", "Mouse", "Monitor", "Pad"];
let colors = ["Red", "Green", "Blue"];
let models = [2025, 2026];


for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors:");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    console.log("Models:");
    for (let j = 0; j < models.length; j++) {
        console.log(`- ${models[j]}`);
    }
}