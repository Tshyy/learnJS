function QuestionsMarks(str) {

  // code goes here
  var arr=str.split('');
  var num=/[1-9]/;
  var qus=/\?/;
  var index=[];
  var tenP=0;
  var flag=0;
  for(var i=0;i<arr.length;i++){

      if(num.test(arr[i])){
          index.push(i);
          arr[i]=parseInt(arr[i]);
      }
  }
  for(i=0;i<index.length;i++){
      for(var k=i+1;k<index.length;k++){
          var qusN=0;
          if((arr[index[i]]+arr[index[k]])===10){
              tenP++;
              for(var j=index[i]+1;j<index[k];j++){
                  if(qus.test(arr[j])){
                      qusN++;
                  }
              }
              if (qusN===3){
              flag++;
              }
              break;
          }
      }
  }
  if(tenP>0 &&  tenP == flag){
      return true.toString();
  }
  return false.toString();

}
