let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100

// [++a] [+] [+b][++] [+] [+c][++] - [+a][++]
/*
    [++a]
    Value: 11
    Explain: Prefix Increment
    [+]
    Explain: add operator
    [+b]
    Value: 20 as a number
    [b++]
    Value: 20 then increment b by one (21)
    Explain: suffix increment
    [+]
    Explain: add operator
    [+c]
    Value: 80
    Explain: make c with positive sign
    [c++]
    Value: 80 then increment c by one (81)
    Explain: suffix increment
    [-]
    Explain: substraction operator
    [+a]
    Value: 11 as a positive number
    Explain: Unary operator
    [a++]
    Value: 11 then increment a by one (12)
    Explain: suffix increment
*/

// final values: a = 12, b = 21, c = 81. 

console.log(++a + -b + +c++ - -a++ + +a); // 13 - 21 + 81 + 13 + 14 = 100

/*
    I don't repeat the previous content . . .
*/

// final values: a = 14, b = 21, c = 82.

console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
/*
    I don't repeat the previous content . . .
*/

// final values: a = 12, b = 22, c = 81.