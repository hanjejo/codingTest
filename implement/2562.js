const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(x=>+x);

let max = Math.max(...input);
console.log(max);
console.log(input.indexOf(max)+1);