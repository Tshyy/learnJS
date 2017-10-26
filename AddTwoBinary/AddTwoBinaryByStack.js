function Stack(){
  var stack=new Array();
  var string="";

  this.in=function(ele){
    stack.push(ele);
  };
  this.out=function(ele){
    stack.pop();
  };
  this.toString=function(){
    var pop;

    while((pop=stack.pop()) || pop == 0){
      string+=pop;
    }

    return string;
  }
}

function toBinary(ele){
  var stack=new Stack();
  var binStr="";

  while(ele>0){
    tem=ele%2;
    stack.in(tem);
    ele=Math.floor(ele/2);
  }
  return stack.toString();
}

function addBinary(e1,e2){
  d1=parseInt(e1,2);
  d2=parseInt(e2,2);

  res=d1+d2;

  res=toBinary(res);
  return res;
}
