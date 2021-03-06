let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let answer = 0;
for (let i = 1; i <= +input[0]; i++) {
  let arr = i
    .toString()
    .split("")
    .map((x) => +x);

  if (arr.length < 3) {
    answer++;
  } else {
    answer += arr[0] - arr[1] == arr[1] - arr[2] ? 1 : 0;
  }
}

console.log(answer);
