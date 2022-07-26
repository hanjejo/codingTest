var fs = require("fs");
// var input = fs.readFileSync("input.txt").toString().split("\n"); // input.txt, /dev/stdin
var input = fs.readFileSync('/dev/stdin').toString().split('\n') // input.txt, /dev/stdin

let n = +input[0];
let arr = input[1].split(" ");
let m = +input[2];
let candidates = input[3].split(" ");
let results = Array.from({ length: m }, () => 0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (candidates[i] === arr[j]) {
      results[i] = 1;
      break;
    }
  }
}

for (let i of results) {
    console.log(i);
  }
