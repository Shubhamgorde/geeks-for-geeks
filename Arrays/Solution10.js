
a = [1,3,5,2,2]

let totalSum = 0
for(let i = 0; i<a.length; i++){
  totalSum += a[i]
}

let mid = totalSum/2
let leftSum = 0;
let indexOfMid = a.length;
for(let i = 0; i< a.length ; i++){
  leftSum += a[i]
  if(leftSum > mid){
    indexOfMid = i
    break
  }
}

rightSum = 0
for(let i = indexOfMid; i < a.length; i++ ){
  rightSum += a[i]
}

if(leftSum == rightSum)
  console.log("Found ", a[indexOfMid])
