const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
let n = +input[0];

class Stack {
  constructor() {
    this.list = [];
  }

  // push X: 정수 X를 스택에 넣는 연산이다.
  push(value) {
    this.list.push(value);
  }
  // pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  pop() {
    return this.list.pop() || -1;
  }
  // size: 스택에 들어있는 정수의 개수를 출력한다.
  size() {
    return this.list.length;
  }
  // empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
  empty() {
    return this.list.length ? 0 : 1;
  }
  // top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  top() {
    return this.list[this.list.length -1] || -1;
  }
}

let stack = new Stack();
for (let i = 1; i <= n; i++) {
  if (+input[i]) {
    stack.push(+input[i]);
  }
  else {
    stack.pop();
  }  
}

let answer = 0;
while(!stack.empty()){
  answer += stack.pop();
}

console.log(answer);