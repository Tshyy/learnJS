function ClosestEnemyII(strArr) {
   var row=new Array(strArr.length);
   var one=/1/;
   var two=/2/;
   var twoN=0;
   var r1,c1;
   var r2,c2;
   var twoP=[];
   for(var i=0;i<row.length;i++){
       if(two.test(strArr[i])){
           twoN=1;
       }
       if(one.test(strArr[i])){
          r1=i;
       }
   }
  if(twoN===0){
      return 0;
  }
  // code goes here
  for(i=0;i<row.length;i++){
      row[i]=strArr[i].split('');
  }

  for(i=0;i<row[r1].length;i++){
      if(row[r1][i]==='1'){
          c1=i;
      }
  }
  var oneP=[r1,c1]
  for(i=0;i<row.length;i++){
      for(var k=0;k<row[0].length;k++){
          if(row[i][k]==='2'){
              r2=i;
              c2=k;
              twoP.push([r2,c2]);
          }
      }

  }
  var h=row.length;
  var w=row[0].length;

  function toR(p1,p2){
      var step=0;
      if(p1==p2){
              return step;
          }
      while(p1++<=w){
          step++;
          if(p1===w){
              p1=0;
          }
          if(p1===p2){
              break;
          }
      }
      return step;
  }

  function toL(p1,p2){
      var step=0;
      if(p1==p2){
              return step;
          }
      while(p1-->=0){
          step++;
          if(p1===-1){
              p1=w-1;
          }
           if(p1===p2){
              break;
          }
      }
      return step;
  }
  function toU(p1,p2){
      var step=0;
      if(p1==p2){
              return step;
          }

      while(p1-->=0){
          step++;
          if(p1===-1){
              p1=h-1;
          }
          if(p1===p2){
              break;
          }
      }
      return step;
  }
  function toD(p1,p2){
      var step=0;
      if(p1==p2){
              return step;
          }
      while(p1++<=h){
          step++;
          if(p1==h){
              p1=0;
          }
           if(p1==p2){
              break;
          }
      }
      return step;
  }

  var minstep=[];
  for(i=0;i<twoP.length;i++){
      var step1=toL(c1,twoP[i][1])+toD(r1,twoP[i][0]);

      var step2=toL(c1,twoP[i][1])+toU(r1,twoP[i][0]);

      var step3=toR(c1,twoP[i][1])+toD(r1,twoP[i][0]);

      var step4=toR(c1,twoP[i][1])+toU(r1,twoP[i][0]);

      minstep.push(Math.min(step1,step2,step3,step4));
  }
  minstep.sort();

  return minstep[0];

}
