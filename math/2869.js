let [a,b,v] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(x=>+x);

console.log(Math.ceil((v-b)/(a-b)));
