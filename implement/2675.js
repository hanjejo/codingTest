const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let a = input.map(x=>x.split(" "));
for (let i = 0; i < a.length; i++) {
  if (a[i].length < 2) {
    continue;
  }
  let str = "";
  for (let j = 0; j < a[i][1].length; j++) {
    for (let k = 0; k < a[i][0]; k++) {
      str += a[i][1][j];
    }
  }
  console.log(str);
}
