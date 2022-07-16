var fs = require('fs');
// var input = fs.readFileSync('input.txt').toString().split(' ');
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

var a = +input[0];
var b = +input[1];

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);
