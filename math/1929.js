var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split(" "); // input.txt, /dev/stdin
// var input = fs.readFileSync("/dev/stdin").toString().split(" "); // input.txt, /dev/stdin

let min = +input[0];
let max = +input[1];
const arr = Array.from({ length: 1000000 }, () => true);

// 에라토스테네스의 체 알고리즘 사용

// 모든 수 추가
for (let i = 2; i * i <= max; i++) {
  if (arr[i]) {
    // i의 배수 false 처리
    for (let j = i * i; j <= max; j += i) {
      arr[j] = false;
    }
  }
}

for (let i = min; i <= max; i++) {
  if (!arr[i]) {
    continue;
  }

  if (i === 1) {
    continue;
  }

  console.log(i);
}
