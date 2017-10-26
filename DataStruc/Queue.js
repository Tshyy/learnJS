/**
 * FIFO
 * @constructor
 */
function Queue(){
  var items=new Array();

  this.enqueue=function(e){
    items.unshift(e);
  };
  this.dequeue=function(){
    return items.pop();
  };
  this.front=function(){
    return items[items.length-1];
  };
  this.size=function(){
    return items.length;
  };
  this.clear=function(){
    items=[];
  };
  this.isEmpty=function(){
    return !items.length;
  };
  this.toString=function(){
    return items.toString();
  };
}
