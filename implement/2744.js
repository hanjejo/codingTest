let a = require("fs").readFileSync("/dev/stdin").toString().split("\n");
console.log(
  a[0]
    .split("")
    .map((x) => (x.charCodeAt() > 96 ? +x.toUpperCase() : x.toLowerCase()))
    .join("")
);
