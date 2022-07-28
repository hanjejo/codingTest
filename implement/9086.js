let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
let [n, m] = [input.shift(),input];

console.log(input.map(x=>x[0] + x[x.length-1]).join("\n"));
