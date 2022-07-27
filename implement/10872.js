const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");
let n = +input[0];

let answer = 1;
for (let i = 2; i <= n; i++) {
  answer *= i;
}

console.log(answer ?? 1);