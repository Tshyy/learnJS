function Dictionary(){
  this.items = {};
}

Dictionary.prototype = {
  constructor : Dictionary,
  set : function(key,value){
    this.items[key]=value;
  },
  remove : function(key){
    if(this.has(key)){
      delete this.items[key];
      return true;
    }
      return false;
  },
  has : function(key){
    return this.items.hasOwnProperty(key);
    //return key in this.items;
  },
  get(key){
    if(this.has(key)){
      return this.items[key];
    }
    return undefined;
  },
  clear() : function(){
    this.items = {};
  },
  size() : function(){
    return Object.keys(this.items).length;
  },
  keys() : function(){
    var values = {};
    for (var k in this.items){
        values.push(k);
    }
    return values;
  },
  values() : function(){
    var values = {};
    for (var k in this.items){
      if(this.has(k)){
        values.push(this.items[k]);
      }
    }
    return values;
  }
}
