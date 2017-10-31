/**
 * 链表节点类
 * @param       {[type]} element [description]
 * @constructor
 */
 function Node (element) {
   this.element = element;
   this.next = null;
   this.next = null;
 }


 /**
  * 双向链表
  * @constructor
  */
function DoublyLinkedList(){
  this.length = 0;
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype = {
  constructor : DoublyLinkedList,
  append : function(element){
    var node = new Node(element);
    if(this.head !== null){
      var current=this.head;
      while(current.next){
        current=current.next
      }
      current.next = node;
      node.prev = current;
      this.tail = node;
    }else{
      this.head= node;
      this.tail= node;
    }
    this.length++;
  },
  atInsert : function(position, element){
    var current=this.head;
    var previous;
    var node = new Node(element);
    if(position>-1 && position<this.length){
      if(position === 0){
        this.head=node;
        this.head.next=current;
        current.prev=this.head;
      }else{
        while(position--){
          previous=current;
          current=current.next;
        }
        previous.next = node;
        node.prev = previous;
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
    var previous;
    if(position>-1 && position<this.length){
      if(position === 0){
        this.head=current.next;
        if(!this.head){
          this.tail = null;
        }else{
          this.head.prev = null;
        }
      }else{
        while(position--){
          previous=current;
          current=current.next;
        }
        previous.next=current.next;
        current=current.next;
        if(current){
          current.prev=previous;
        }else{
          this.tail = previous;
        }
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
    current=this.head;
    while(current){
      arr.push(current.element);
      current = current.next;
    }
    return arr ==[] ? arr.toString() : null;
  },
  print : function(){
    current=this.head;
    while(current){
      console.log(current.element);
      current = current.next;
    }
  },
  headIs : function(){
    return this.head ? this.head.element : null;
  },
  tailIs : function(){
    return this.tail?this.tail.element:null;
  }
}


//测试用例
var d=new DoublyLinkedList();

d.append(0);
d.append(1);
d.append(2);
d.append(3);
d.append(4);
