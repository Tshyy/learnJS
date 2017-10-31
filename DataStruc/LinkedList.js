/**
 * 链表节点类
 * @param       {[type]} element [description]
 * @constructor
 */
function Node (element) {
  this.element = element;
  this.next = null;
}
/**
 * 单向链表构造函数
 * @constructor
 */
function LinkedList(){
   this.length = 0;
   this.head = null;
}

LinkedList.prototype = {
  constructor : LinkedList,
  append : function(element){
    var node = new Node(element);
    if(this.head !== null){
      var current=this.head;
      while(current.next){
        current=current.next
      }
      current.next = node;
    }else{
      this.head= node;
    }
    this.length++;
  },
  atInsert : function(position, element){
    var current=this.head;
    var prev;
    var node = new Node(element);
    if(position>-1 && position<this.length){
      if(position === 0){
        this.head=node;
        this.head.next=current;
      }else{
        while(position--){
          prev=current;
          current=current.next;
        }
        prev.next = node;
        node.next = current;
        }
        this.length++;
        return true;
      }else{
        return false;
      }
  },
  removeAt : function(position){
    var current=this.head;
    var prev;
    if(position>-1 && position<this.length){
      if(position === 0){
        this.head=current.next;
      }else{
        while(position--){
          prev=current;
          current=current.next;
        }
        prev.next=current.next;
      }
      this.length--;
      return true;
    }else{
      return false;
    }
  },
  remove : function(element){
    var position = this.indexOf(element);
    if(position !== null){
      this.removeAt(position);
      return true;
    }else{
      return false;
    }
  },
  indexOf : function(element){
    var current=this.head;
    var position = 0;
    while(element !== current.element){
      if(current.next){
        current=current.next;
        ++position;
      }else{
        break;
      }
    }
    return position<this.length ? position : null;
  },
  isEmpty : function(){
    return !this.size();
  },
  size : function(){
    return this.length;
  },
  toString : function(){
    var arr = [];
    var test=0;
    current=this.head;
    while(current){
      arr.push(current.element);
      current = current.next;
      test++;
    }
    return arr.length ? arr.toString() : null;

  },
  print : function(){
    current=this.head;
    while(current !== null){
      console.log(current.element);
      current = current.next;
    }
  },
  headIs : function(){
    return this. ? this.head.element : null;
  }
};

// 单向链表测试用例
var s= new LinkedList();
s.append(0);
s.append(1);
s.append(2);
s.append(3);
s.append(4);

s.size();

s.toString();

s.indexOf(0);
s.indexOf(2);
s.indexOf(4);

s.toString();

s.atInsert(0,-1);
s.atInsert(3,-3);
s.atInsert(6,-2);

s.remove(-1)
