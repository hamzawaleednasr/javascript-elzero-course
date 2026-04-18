let price = 100;
let discount = false;
let discountAmount = 10;
let country = "Egypt";
let student = true;

if (discount === true) {
    price -= discountAmount;
} else if (country === "Egypt") {
    if (student === true) {
        price -= discountAmount + 40;
    } else {
        price -= discountAmount + 20;
    }
} else if (student === true) {
    price -= discountAmount + 30;
} else {
    price -= 10;
}

console.log(price);