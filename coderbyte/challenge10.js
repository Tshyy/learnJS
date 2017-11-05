function AlphabetSoup(str) {

  // code goes here
  var arr=str.split('');
  arr=arr.sort(alphaSort);
  function alphaSort(s1,s2){
      if(s1.toLowerCase()>s2.toLowerCase()){
          return  1;
      }else{
          return -1;
      }
  }
  str=arr.join('');
  return str;
}
