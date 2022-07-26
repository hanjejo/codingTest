// 값 입력받는 코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function (){
  input = input.map((item) => +item);
  solution(input[0], input[1]);
  process.exit();
});

function solution(x, y) {
  let as = 0;
  if (+x > 0 && +y > 0) as = 1;
  if (+x < 0 && +y > 0) as = 2;
  if (+x < 0 && +y < 0) as = 3;
  if (+x > 0 && +y < 0) as = 4;
  console.log(as);
}
