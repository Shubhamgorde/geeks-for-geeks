
let a = [-1, -2, 3, 5,-4, -1, 2 , 5]

let localSum = a[0]

let globalSum = a[0]

for(let i=1; i<a.length; i++){
  localSum = Math.max(a[i], (localSum + a[i]))
  console.log(localSum, globalSum)
  globalSum = Math.max(localSum, globalSum)
}

console.log("Sum : ", globalSum)