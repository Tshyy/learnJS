function ScaleBalancing(strArr) {

  // code goes here
  var num=/[0-9]+/g;

  match1=num.exec(strArr[0]);
  match2=num.exec(strArr[0]);



  var l=parseInt(match1);
  var r=parseInt(match2);

  if(l===r){
      return false;

  }

  var n=[];
  num.lastIndex=0;
  for(var i=1;i<strArr[1].length;i=i+3){
      n.push(parseInt(num.exec(strArr[1])));
  }

  var L=[];
  var R=[];
  var len=n.length;

  for(i=0;i<len;i++){
      L.push(l+n[i]);
      R.push(r+n[i]);
  }

  var ls=null,
      rs=null;
  for(i=0;i<len;i++){
      if(l===R[i]){
          rs=i;
          return n[rs].toString();
      }
  }
  for(i=0;i<len;i++){
      if(r===L[i]){
          ls=i;
          return n[ls].toString();
      }
  }
  for(i=0;i<len;i++){
      for(var k=0;k<len;k++){
          if(R[i]===L[k]){
            ls=i;
            rs=k;
          }
      }
  }
  var r2=[];
  if(rs!==null){
      r2.push(n[rs]);
  }
  if(ls!==null){
      r2.push(n[ls]);
  }
  //return R;
  if(rs===null && ls===null){
      return 'not possible';
  }
  return r2.join(',');

}
