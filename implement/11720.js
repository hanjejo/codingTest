const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input[1].split("").map(x=>+x).reduce((t,c)=> t+c, 0));