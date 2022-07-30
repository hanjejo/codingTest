let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

let [m, s, f] = [+input[0], +input[1], +input[2]];

let value = m % s;
let answer = 0;
for (let i = 0; i < f; i++) {
  value *= 10;
  answer = Math.floor(value / s);
  value %= s
}

console.log(answer);