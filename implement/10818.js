const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input[1].split(" ").map(x=>+x);
console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);