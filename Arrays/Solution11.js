

a= [16,17,4,3,5,0];

console.log(a)


max = a[a.length - 1];
leadersArray = []
leadersArray[0] = max;
for(i=a.length-2; i>0; i--){
  if(max < a[i]){
    leadersArray.push(a[i]);
    max = a[i];
  }
}

console.log("leadersArray", leadersArray)
