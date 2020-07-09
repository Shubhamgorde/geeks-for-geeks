//

let X = [2, 1, 6]
let Y = [1, 5] 
let countPair = 0;
 // xy > yx

 // powXExpY = [2,32,1,1,6,64436]
 // powYExpX = [1,1,1,25,5,345435]

 for(let i = 0; i< X.length; i++){
   for(let j = 0; j< Y.length; j++){
     if(Math.pow(X[i], Y[j]) > Math.pow(Y[j], X[i]))
        countPair++;
   }
 }

 console.log("count: "+ countPair)