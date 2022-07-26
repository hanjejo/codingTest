var fs = require('fs');
// var input = fs.readFileSync('input.txt').toString().split('\n') // input.txt, /dev/stdin
var input = fs.readFileSync('/dev/stdin').toString().split('\n') // input.txt, /dev/stdin

let count = +input[0];
let arr = input[1].split(' ');
let max = Math.max(...arr);
let total = 0;

for (let i = 0; i < count; i++ ) {
    total += (arr[i] / max * 100);
}

console.log(total / count);