function FirstFactorial(num) {

  // code goes here
  if(num===1){
      return num;
  }
  return num*FirstFactorial(num-1);
}
   
