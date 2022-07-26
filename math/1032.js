var fs = require('fs');
// var input = fs.readFileSync('input.txt').toString().split('\n') // input.txt, /dev/stdin
var input = fs.readFileSync('/dev/stdin').toString().split('\n') // input.txt, /dev/stdin

var count = +input[0];
var text = input[1];

for (let i = 2; i <= count; i++) {
    for (let j = 0; j < text.length; j++){
        if (text[j] === '?') {
            continue;
        }
        
        if (text[j] !== input[i][j]) {
            let splitArr = text.split('');
            splitArr[j] = '?';
            text = splitArr.join('').toString();
        }
    }
}

console.log(text);