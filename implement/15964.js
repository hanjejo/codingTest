console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .reduce((i, e) => i + e * e, 0) % 10
);
