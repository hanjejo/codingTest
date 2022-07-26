let fs = require("fs");
// var input = fs.readFileSync("input.txt").toString().trim().split("\n"); // input.txt, /dev/stdin
var input = fs.readFileSync("/dev/stdin").toString().split("\n"); // input.txt, /dev/stdin
let n = +input[0];
class Deque {
  constructor() {
    this.list = [];
  }

  // push_front X: 정수 X를 덱의 앞에 넣는다.
  pushFront(value) {
    this.list.unshift(value);
  }

  // push_back X: 정수 X를 덱의 뒤에 넣는다.
  pushBack(value) {
    this.list.push(value);
  }

  // pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  popBack() {
    return this.list.pop() || -1;
  }

  // pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  popFront() {
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

let deque = new Deque();
let answer = [];
for (let i = 1; i <= n; i++) {
  switch (input[i]) {
    case "front":
      answer.push(deque.front());
      break;
    case "back":
      answer.push(deque.back());
      break;
    case "size":
      answer.push(deque.size());
      break;
    case "empty":
      answer.push(deque.empty());
      break;
    case "push_front":
      deque.pushFront();
      break;
    case "push_back":
      ;
      break;
    case "pop_front":
      answer.push(deque.popFront());
      break;
    case "pop_back":
      answer.push(deque.popBack());
      break;
    default:
      let data = input[i].split(" ");
      if (data[0] === 'push_front'){
        deque.pushFront(data[1]);
      }
      else {
        deque.pushBack(data[1]);
      }
      break;
  }
}

console.log(answer.join("\n"));
