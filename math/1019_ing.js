var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split(" "); // input.txt, /dev/stdin
// var input = fs.readFileSync("/dev/stdin").toString().split(" "); // input.txt, /dev/stdin

let n = +input[0];
const arr = Array.from({ length: 10 }, () => 0);
let length = n.toString().length;

// 
for (let i = length; i > 0; i--) {
  let unit = 10 ** (i - 1);
  let mock = Math.floor(n / unit);
  n %= unit;
  for (let k = 0; k < 9; k++) {
    if (unit < 10 && k == 0) {
      continue;
    }

    arr[k] += (unit ** (i - 1)) * mock;
  }
}

// 1. 1의자리 나머지 구하기
// 2. 배열 나머지값만큼 인덱스 +1의자리
// 3. 10의자리 나머지 구하기 나머지 값만큼 인덱스 + 10

console.log(...arr.join(" "));
