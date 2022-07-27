const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
let n = +input[0];

let answer = [];
for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ");
  answer[i-1] = +a + +b;
}

console.log(answer.join("\n"));
