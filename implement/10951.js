const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

let answer = [];
for (let i = 0; i < +input; i++) {
  answer[i] = "";
  for (let j = 0; j <= i; j++) {
    answer[i] += "*";
  }
}

console.log(answer.join("\n"));
