function TimeConvert(num) {

  // code goes here
  var hours=Math.floor(num/60);
  var minutes=num%60;
  var time='';
  time=hours+':'+minutes;
  return time;

}
