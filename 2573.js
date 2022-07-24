var fs=require("fs")
var a=+fs.readFileSync("/dev/stdin").toString().split(" ")[0]
console.log((!(a%4)?!!(a%100)||!(a%400):false)?1:0)