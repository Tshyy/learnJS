/**
 * 对二进制字符串作和
 * @param {[type]} str1 [二进制字符串]
 * @param {[type]} str2 [二进制字符串]
 */
function addBinary(str1,str2){
  var a1=str1.split('').reverse();
  var a2=str2.split('').reverse();
  var stay=0;
  var up=0;

  var size=a1.length>a2.length?a1.length:a2.length;
  var result=new Array();

  for(var i=0; i<size ;i++){
    a1[i]=a1[i]?parseInt(a1[i]):0;
    a2[i]=a2[i]?parseInt(a2[i]):0;

    step=a1[i]+a2[i]+up;
    stay=step%2;
    result[i]=stay;
    up=step/2;
  }

  if(up){
    result[i]=up;
  }
  return result.reverse().join('');
}
