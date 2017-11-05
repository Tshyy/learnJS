function LongestWord(sen) {

  // code goes here
  var pattern=/[a-z]+/ig;
  var words=[];
  var length=0;
  var index=0;
  var match=pattern.exec(sen);
  while(match){
      var markIndex;
      words.push(match[0]);
      if(match[0].length>length){
          length=match[0].length;
          markIndex=index;
      }
      index++;
      match=pattern.exec(sen);
  }
  return words[markIndex];
}
