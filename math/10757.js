var fs = require("fs");
// var input = fs.readFileSync("input.txt").toString().split(" ");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

// 입력
let arrA = input[0].toString();
let arrB = input[1].toString();

// A가 무조건 크도록 변경
if (arrB.length > arrA.length) {
  let temp = arrA;
  arrA = arrB;
  arrB = temp;
}

let carry = 0, total = "", answer = "";
let bIndex = arrB.length - 1;
for (let i = arrA.length - 1; i >= 0; i--) {
  // 1의자리 추출
  const valueA = +arrA[i];
  const valueB = bIndex >= 0 ? +arrB[bIndex] : 0;
  bIndex--;

  // 1의자리 합계
  let sum = valueA + valueB + carry;
  carry = sum >= 10 ? 1 : 0;

  // 총합
  total += sum % 10;
}

// 최종 캐리 연산
if (carry) {
  total += carry;
}

// 뒤집어서 저장
for (let i = total.length - 1; i >= 0; i--) {
  answer += total[i];
}

// 정답 출력
console.log(answer);
