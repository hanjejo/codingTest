var fs = require('fs');
// var input = fs.readFileSync('input.txt').toString().split('\n') // input.txt, /dev/stdin
var input = fs.readFileSync('/dev/stdin').toString().split('\n') // input.txt, /dev/stdin

var count = +input[0];
var numbers = input[1].split(' ');
var result = 0;

for (let i = 0; i < count; i++) {
    let isPrime = true;

    if (+numbers[i] === 1) {
        continue;
    }
    else {
        for (let j = 2; j < numbers[i]; j++) {
            if ((numbers[i] % j) === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        result++;
    }
}

console.log(result);