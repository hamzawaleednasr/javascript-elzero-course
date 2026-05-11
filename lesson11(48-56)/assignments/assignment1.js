let start = 10;
let end = 100;
let exclude = 40;

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

for (let i = start; i <= end; i+=10) {
    if (i === 40) {
        continue;
    }
    console.log(i);
}