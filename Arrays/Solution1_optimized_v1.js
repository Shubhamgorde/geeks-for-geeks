
let a = [1, 2, 3, 7, 5]

let sum = 12

let first = 0;

let last = -1;

let tempTot = 0;

for (let i = first; i<a.length; i++){
  tempTot += a[i];
  //console.log("tempTot "+ i + " "+ tempTot)
  if(tempTot == sum){
    last = i;
    break;
  }
  else if(tempTot > sum){
    tempTot -= a[first];
    first++;
    if(tempTot == sum){
      last = i;
      break;
    }
  }
}

console.log("start Index "+ (first+1) + " End index "+ (last+1))