const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

const [a, b] = input;
console.log(+a - +b < 0 ? (+a - +b) * -1 : +a - +b);
