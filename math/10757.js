let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");
let a = BigInt(input[0]);
let b = BigInt(input[1]);

console.log((a+b).toString());
