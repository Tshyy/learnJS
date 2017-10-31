/**
 * FIFO
 * @constructor
 */
function Queue(){
  this.items=new Array();
}

Queue.prototype = {
  constructor : Queue,

  enqueue : function(e){
    this.items.unshift(e);
  },
  dequeue : function(){
    return this.items.pop();
  },
  front : function(){
    return this.items[this.items.length-1];
  },
  size : function(){
    return this.items.length;
  },
  clear : function(){
    this.items=[];
  },
  isEmpty : function(){
    return !this.items.length;
  },
  toString : function(){
    return this.items.reverse().toString();
  }
}
