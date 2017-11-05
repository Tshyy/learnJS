function LetterChanges(str) {

  // code goes here
  var code;
  var res='';
  for(var i=0;i<str.length;i++){
      code=str.charCodeAt(i);
      if((code>='A'.charCodeAt(0) && code<'Z'.charCodeAt(0)) || (code>='a'.charCodeAt(0) && code<'z'.charCodeAt(0))){
          code+=1;
      }
      if((code==='Z'.charCodeAt(0) )||(code==='z'.charCodeAt(0)) ){
          code-=25;
      }
      var alpa=String.fromCharCode(code);
      if(alpa==='a'||alpa==='e'||alpa==='i'||alpa==='o'||alpa==='u'){
          alpa=alpa.toUpperCase();
      }
      res+=alpa;
  }
  return res;

}
