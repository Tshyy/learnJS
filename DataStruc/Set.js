function Set(){
  this.items = {};
}

Set.prototype = {
  constructor : Set,
  add : function(value){
    if(this.has(value)){
      return false;
    }else{
      this.items[value]=value;
      return true;
    }
  },
  remove : function(value){
    if(!this.has(value)){
      return false;
    }else{
      delelte this.items[value];
      return true;
    }
  },
  has : function(value){
    //return value in this.items;
    return this.items.hasOwnProperty(value);
  },
  clear : function(){
    this.items = {};
  },
  size : function(){
    Object.keys(this.items).length; //ie9\firefox4\chrome5\opera12\safari5
    //或者for in 累加
  },
  value : function(){
    var keys = [];
    for(var key in this.items){
      keys.push(key);
    }
    return keys;
  }
}
