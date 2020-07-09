a  = [1, 2, 3, 4, 5, 7, 8];
let sumOfArray = 0;
for(let i=0;i < a.length; i++){
  sumOfArray += a[i];
}

let missedElement = ((a.length+1) * (a.length + 2) / 2) - sumOfArray; 
 
console.log(`Missing element is : ${missedElement}` );