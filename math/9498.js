var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ') // , 

let a = +input[0];
console.log(a < 60 ? 'F' : a < 70 ? 'D' : a < 80 ? 'C' : a < 90 ? 'B' : 'A');