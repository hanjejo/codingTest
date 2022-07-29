let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");
let characters = ["c=", "c-", "d-", "lj", "nj", "s=", "z=", "dz="];

let answer = 0;
for (let i = 0; i < input[0].length; i++) {
  if (characters.includes(input[0].slice(i, i + 3))) {
    i+=2;
  }else if (characters.includes(input[0].slice(i, i + 2))) {
    i+=1;
  } 
  answer++;
}

console.log(answer);
