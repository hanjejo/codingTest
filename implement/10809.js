let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let answer = Array.from({ length: 26 }, () => -1);

for (let i = 0; i < input[0].length; i++) {
  let position = input[0][i].charCodeAt() - 97;
  if (answer[position] === -1) 
    answer[position] = i;
}

console.log(answer.join(" "));
