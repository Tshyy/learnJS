function SimpleAdding(num) {

  // code goes here
  if(num===1){
      return num;
  }
  return num+SimpleAdding(num-1);

}
   
