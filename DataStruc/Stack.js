/**
 * LIFO
 * @constructor
 */
function Stack(){
  this.items=new Array();
}
/**
 * 原型方法
 * @type {Object}
 */
Stack.prototype = {
  constructor : Stack,
  push : function(e){
    this.items.push(e);
  },

  pop : function(){
    return this.items.pop();
  },

  peek : function(){
    return this.items[this.items.length-1];
  },

  isEmpty : function(){
    return !this.items.length;
  },

  clear : function(){
    this.items=[];
  },

  size : function(){
    return this.items.length;
  },

  toString : function(){
    return this.items.length ? this.items.toString() : null;
  }
};
