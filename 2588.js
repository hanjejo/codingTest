var fs = require('fs');
// var input = fs.readFileSync('input.txt').toString().split('\n') // input.txt, /dev/stdin
var input = fs.readFileSync('/dev/stdin').toString().split('\n') // input.txt, /dev/stdin

let inputA = +input[0];
let inputB = +input[1];

let lv1 = (inputB % 10);
let lv10 = ((inputB % 100) - lv1) / 10 ; 
let lv100 = ((inputB % 1000) - (lv10 * 10) - lv1) / 100;

console.log(inputA * lv1);
console.log(inputA * lv10);
console.log(inputA * lv100);
console.log(inputA * inputB);
