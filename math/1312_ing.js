let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

let [m,s,f] = [+input[0], +input[1], +input[2]];

let value = m % s;
for (let i = 0 ; i < f; i++)
{
  
}

console.log(value);