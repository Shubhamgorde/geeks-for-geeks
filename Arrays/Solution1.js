
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 15

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
    first++;
    i = first - 1;
    tempTot = 0;
  }
}

console.log("start Index "+ (first+1) + " End index "+ (last+1))