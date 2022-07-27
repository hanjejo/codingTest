let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i.toString())) {
    console.log(i);
  }
}
