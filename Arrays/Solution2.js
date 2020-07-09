
//1 5 3 2
// 2
let a = [1, 6, 4,  5, 3, 2]
let count = 0;

a = a.sort((a, b)=>{return b - a})

console.log(a);
function findIfElementTriplet(a, index, element){
  let count = 0;
  let trpletObj={};
  trpletObj.element = element
  trpletObj.arrayPairs = [];
  for (let i = index; i < a.length && a[i] >= element/2 ; i++){// 
    let rem = element - a[i];
    for(let j = i+1; j < a.length; j++){
      if( a[j] == rem){
        count++;
      }
    } 
  }

  return count;
}

for(let i = 0; i < a.length - 1 ; i++){
  let element = a[i];
  count = count + findIfElementTriplet(a, i+1, element )
  
}

if(count == 0){
  count = -1
}
console.log("No of Triplets found: "+count)