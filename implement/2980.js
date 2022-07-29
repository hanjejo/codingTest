let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split(" ");

let [a, b] = [
  +input[0].split("").reverse().join(""),
  +input[1].split("").reverse().join(""),
];

console.log(a > b ? a : b);
