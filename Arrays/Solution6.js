
a = [1, 2, 3, 4, 5, 6]
// let count = 0;
// let temp = a[0];
// for(let i=0; i < a.length;){
//   console.log(a)
//   a[i] = a[i+1]
//   a[i+1] = temp

//   temp = a[i]

//   a[i] = a[a.length - (count+1)]
    
//   i = i+2;
//   count++;

  
// }

// console.log("f", a)



// Output the modified array with alternated elements.
let i=0,j=a.length-1;
		     let str="";
         let arr=[];
		     while(j>i)
		    {
		       
		        str += a[j]+" "+a[i]+ " ";
		        i++;
		        j--;
		     }
		     if(i==j){
		         str = str + " " +a[i];
             
		     }// 
         console.log(str.trim().split(" "))
// b= []
// for(l
//console.log(str)et i=0; i < a.length; i=i+2){
//   console.log("a array", a)
//   temp = a[i+1]
//   b[i+1] = a[i]
//   b[i] = a[a.length - (count+1)]
//   // console.log("count "+ count + " "+  (a.length -(count+1)) + a[a.length - (count+1)])
//   count++;
// }

// console.log(a)

// for(let i=0; i < a.length; i=i+2){
//   a[i+1] = a[i]
//   a[i] = a[a.length - (i + 1)]
// }


// output 6 1 5 2 4 3

// i(0) -> length - j(1) - > 5
// i(2) -> length - j(2) -> 4
// i(4) -> length - j(3) -> 3

// i(1) -> a[0] -> i+1
// i(3) -> a[1] -> i+1
// i(5) -> a[2]