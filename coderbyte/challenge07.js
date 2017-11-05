function SimpleSymbols(str) {

  // code goes here
  var arr=str.split('');
  var flag=-1;
  for(var i=0;i < arr.length;i++){
      if((arr[i]>='a' && arr[i]<='z')||(arr[i]>='A' && arr[i]<='Z')){
        if(i===0 || i === arr.length-1) {
            flag=-1;
        }
        if(arr[i-1]==='+' && arr[i+1]==='+'){
            flag=1
        }else{
            flag=-1;
        }
      }
  }
  if(flag===1){
      return true;
  }else{
      return false;
  }
}
