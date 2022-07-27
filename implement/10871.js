const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
const x = +input[0].split(" ")[1];

console.log(input[1].split(" ").filter(item => item < x).join(" "));
