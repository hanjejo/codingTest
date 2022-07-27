const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = [];
for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ");
  answer[i] = +a + +b;
}

console.log(answer.filter(item => item !== 0).join("\n"));
