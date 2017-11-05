function VowelSquare(strArr) {

  // code goes here
  var vowel=/[aeiou]/;
  var row=new Array(strArr.length);
  for(var i=0;i<row.length;i++){
      row[i]=strArr[i].split('');
  }
  for(i=1;i<row.length;i++){
      if(row[i].length!==row[i-1].length){
          return 'input error';
      }
  }

  for(i=0;i<row.length-1;i++){
      for(var k=0;k<row[i].length-1;k++){
          if(vowel.test(row[i][k]) && vowel.test(row[i][k+1])){
              if(vowel.test(row[i+1][k]) && vowel.test(row[i+1][k+1])){
                  return i.toString()+'-'+k.toString();
              }
          }
      }
  }
  return 'not found';

}
