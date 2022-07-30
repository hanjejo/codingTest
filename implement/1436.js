let input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

let [cnt, i] = [0, 666];
while (cnt < input) {
  if (i.toString().includes('666')){
    cnt++;
  }
  i++;
}

console.log(--i);
