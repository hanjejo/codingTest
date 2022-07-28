let i = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");
let r = 0;
let a = [
  ["A", 4],
  ["B", 3],
  ["C", 2],
  ["D", 1],
];

if (i[0][0] !== "F") {
  r = a
    .filter((x) => x[0] === i[0][0])
    .map((x) =>
      i[0][1] === "+" ? +x[1] + 0.3 : i[0][1] === "-" ? +x[1] - 0.3 : x[1]
    )[0];
}
console.log(r.toFixed(1));
