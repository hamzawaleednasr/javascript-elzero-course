let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here   
allArrs.push(`${arr2[arr2.indexOf("F")]}${arr1[arr1.indexOf("X")]}${arr2[arr2.indexOf("Y")]}`.toLowerCase())

console.log(allArrs); // fxy