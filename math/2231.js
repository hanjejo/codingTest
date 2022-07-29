let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

let answer =0;
for (let i = 1; i < +input[0]; i++) {
  let arr = i
    .toString()
    .split("")
    .map((x) => +x);
  if (arr.reduce((x, c) => x + c, i) == +input[0]){
    answer = i;
    break;
  };
}
console.log(answer);

