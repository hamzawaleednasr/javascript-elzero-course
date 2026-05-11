let products = ["Keyboard", "Mouse", "Monitor", "Pad"];
let colors = ["Red", "Green", "Blue"];

mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(`# ${products[i]}`);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}   