var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split(" "); // input.txt, /dev/stdin
// var input = fs.readFileSync("/dev/stdin").toString().split(" "); // input.txt, /dev/stdin

let min = +input[0];
let max = +input[1];
const arr = Array.from({ length: 1000000 }, () => true);
let sqrtCount = 0;

// min의
console.log(Math.round(Math.sqrt(min)));
let realMin = Math.round(Math.sqrt(min));
// 에라토스테네스의 체 알고리즘 사용
if (min === 1) {
  sqrtCount++;
  min = 2;
}
for (let i = min; i * i <= max; i++) {
  for (let j = 1; i * i * j <= max; j++) {
    if (arr[i * i * j] === true) {
      arr[i * i * j] = false;
      sqrtCount++;
    }
  }
}

console.log(max - sqrtCount);
