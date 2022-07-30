let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
  input.shift();
  console.log(input.map(x=>+x).sort((a,b)=> a-b).join("\n"));
