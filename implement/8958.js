let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("input.txt").toString().trim().split("\n"); // input.txt, /dev/stdin

let n = +input[0];
let answer = Array.from({ length: n }, () => 0);
for (let i = 1; i <= n; i++) {
  let point = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      answer[i - 1] += ++point;
    }else
    {
      point = 0;
    }
  }
}

console.log(answer.join("\n"));
