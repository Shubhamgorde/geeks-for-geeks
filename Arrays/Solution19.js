// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom



// 4 3 2 7 8 9

// output : 7

// let a = [4, 3, 2, 7, 8, 9]
a = [9, 11, 9, 11,  12]
let flag = 0;
let elemFound = 0;

for(let i=1; i<a.length-1; i++){
  for( let j=0 ; j < i; j++){
    if(a[j] > a[i] ){
      flag = 1;
      break
    }
  }
  for(let k = a.length-1; k > i ; k--){
    if(a[k] < a[i]){
      flag = 1; 
      break
    }
  }
  if(flag == 0){
    console.log("element found : " + i + " " + a[i])
    elemFound = 1 
    break;
  }
  flag = 0
}

if(elemFound == 0){
  console.log(-1)
}