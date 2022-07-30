let answer = Array.from({ length: 10001 }, () => false);
for (let i = 1; i < 10000; i++) {
  let arr = i.toString().split("").map((x) => +x);
  answer[arr.reduce((x, c) => x + c, i)] = true;
}

let printer = [];
for (let i = 1; i < 10000; i++) {
  if (answer[i] == false) printer.push(i);
}
console.log(printer.join("\n"));
