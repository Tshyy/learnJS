//check if a str array without ?  succeed
//tryStr is string
function canPass(tryStr){
      var map=positionMap(5);
      var tryArr=tryStr.split('');
      var position=[0,0]
      if(tryArr[0]==='u'||tryArr[0]==='l'){
          return false;
      }
      if(tryArr[tryArr.length-1]==='u'||tryArr[tryArr.length-1]==='l'){
          return false;
      }
      for(var j=0;j<tryArr.length;j++){
          str=position[0]+','+position[1];
          map[str]=1;
          position=move(tryArr[j],position);
          if(!legalPosition(position,5)){
              return false;
          }
          str=position[0]+','+position[1];
          if(map[str]){
              return false;
          }
      }
      if(position[0]===4 && position[1]===4){
          return true;
      }else{
          return false;
      }
 }
// point move arg to new point
//arg is one of ['u','d','l','r'];point is [r,c],r=row number,c=column number
function move(arg,point){
       switch(arg){
              case 'u':
                  point=[point[0]-1,point[1]];
                  break;
              case 'd':
                  point=[point[0]+1,point[1]];
                  break;
              case 'l':
                  point=[point[0],point[1]-1];
                  break;
              case 'r':
                  point=[point[0],point[1]+1];
       }
       return point;
  }
// find all possible path, if number of '?' is Q ,then number of paths is 4^Q
//arr:array with ?;pos:array of ? position in strArr;
//strArr is array of string or strings which are possible path
function allPossible(strArr,pos){
      var allStr=[];
      var flag=-1;
      var arr=strArr[0].split('');
      for(i=0;i<pos.length;i++){
          if(arr[pos[i]]==='?'){
              flag=pos[i];
              break;
          }
      }
      if(flag===-1){
          return  strArr;
      }
      else{
          strArr.forEach(function(value,index,array){
          singleAll(value.split(''),flag).forEach(function(v,i,a){
                                                        allStr.push(v);
                                                      });
                   });
          return allPossible(allStr,pos);
      }
  }
//to make a string with '?' become 4 other possible string path
//return 4 possible path in array All
function singleAll(array, index){
      var All=[];
      array[index]='u';
      All.push(array.join(''));
      array[index]='d';
      All.push(array.join(''));
      array[index]='l';
      All.push(array.join(''));
      array[index]='r';
      All.push(array.join(''));
      return All;
  }
//make a visited or not visited map of n*n points, 0-not 1-visited.
function positionMap(n){
    var map={};
    var str='';
    for(var i=0;i<n;i++){
        for (var k=0;k<n;k++){
           str=i+','+k;
           map[str]=0;
        }
    }
    return map;
}
//check if position is legal(not get out of n*n)
//pos is array of row number and column number
function legalPosition(pos,n){
    if(pos[0]>=0 && pos[0]<n && pos[1]>=0 && pos[1]<n){
        return true;
    }else{
        return false;
    }
}
function CorrectPath(str) {

  // code goes here
  var arr=str.split('');
  var length=arr.length;

  var index=[];
   for(var i=0; i<arr.length; i++){
      if(arr[i]==='?'){
          index.push(i);
      }
    }
    if(index.length===0){
        return "no ?";
    }
  //only consider if head of str is ?
  if( arr[0]=='?'){  //head of str is a ?
      index.shift();

      arr[0]='d';  // no.1
      var all=allPossible([arr.join('')],index);
      for(i=0;i<all.length;i++){
          if(canPass(all[i])){
              return all[i];
          }
      }
      arr[0]='r';  //no.2
      all=allPossible([arr.join('')],index);
      for(i=0;i<all.length;i++){
          if(canPass(all[i])){
              return all[i];
          }
      }
  }else{            //? is not head of str
        all=allPossible([str],index);
       for(i=0;i<all.length;i++){
          if(canPass(all[i])){
              return all[i];
          }
      }
  }
  return "input is not impossible";
}
