let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let [array, targets] = [
  input[1]
    .split(" ")
    .map((x) => +x)
    .sort((a, b) => a - b),
  input[3].split(" ").map((x) => +x),
];

let answer = [];
for (let i = 0; i < targets.length; i++) {
  answer.push(
    binarySearch(array, 0, array.length - 1, targets[i]) != -1 ? 1 : 0
  );
}

console.log(answer.join("\n"));

function binarySearch(arr, start, end, target) {
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
