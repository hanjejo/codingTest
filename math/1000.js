var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ') // input.txt, /dev/stdin

var a = +input[0];
var b = +input[1];

console.log(a+b);