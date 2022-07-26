let fs = require("fs");
var input = fs.readFileSync('input.txt').toString().trim().split('\n') // input.txt, /dev/stdin
// var input = fs.readFileSync("/dev/stdin").toString().split("\n"); // input.txt, /dev/stdin
let n = +input[0];
class Queue {
  constructor() {
    this.list = [];
  }

  // push X: 정수 X를 큐에 넣는 연산이다.
  push(value) {
    this.list.push(value);
  }
  // pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  pop() {
    return this.list.shift() || -1;
  }
  // size: 큐에 들어있는 정수의 개수를 출력한다.
  size() {
    return this.list.length;
  }
  // empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
  empty() {
    return this.list.length ? 0 : 1;
  }
  // front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  front() {
    return this.list[0] || -1;
  }
  // back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  back() {
    return this.list[this.list.length - 1] || -1;
  }
}

let queue = new Queue();
let answer = [];
for (let i = 1; i <= n; i++) {
  switch (input[i]) {
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    default:
      queue.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(answer.join("\n"));
