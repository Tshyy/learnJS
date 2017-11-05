function LetterCapitalize(str) {

  // code goes here
  var arr=str.split(' ');
  var i=0;
  var arr1=[];
  while(arr[i]){
      arr1=arr[i].split('');
      arr1[0]=arr1[0].toUpperCase();
      arr[i]=arr1.join('');
      i++;
  }
  str = arr.join(' ');
  return str;
}
