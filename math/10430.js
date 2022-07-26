var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" "); // input.txt, /dev/stdin

var A = +input[0];
var B = +input[1];
var C = +input[2];

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
