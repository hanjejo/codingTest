let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("input.txt").toString().trim().split("\n"); // input.txt, /dev/stdin

let answer = [];
for (let i = 0; i <= input.length - 1; i++) {
  let value = +input[i] % 42;
  if (!answer.includes(value)) {
    answer.push(value);
  }
}

console.log(answer.length);
