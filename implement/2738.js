let p=require("fs").readFileSync("/dev/stdin").toString().split("\n")
let [n,m]=p.shift().split(" ")
let h=p.map((x)=>x.split(" "))
let a=[]
for (let i=0;i<+n;i++){
  a[i]=[]
  for (let j=0;j<+m;j++)
    a[i][j]=+h[i][j]+ +h[i+ +n][j]
}
console.log(a.map(x=>x.join(" ")).join("\n"))