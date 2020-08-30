 function addOne(num){
   throw new Error("Error provocado por mi!");
 }

 function getNum(){
   return addOne(10);
 }

 function c(){
   console.log(getNum() + getNum())
 }

 c()