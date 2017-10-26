function DoublyLinkedList(){
  var Node = function(element){
    this.element = element;
    this.prev = null;
    this.next = null;
  };
  var length = 0;
  var head = null;
  var tail = null;

  this.append = function(element){
    var node = new Node(element);
    if(head !== null){
      var current=head;
      while(current.next){
        current=current.next
      }
      current.next = node;
      node.prev = current;
      tail = node;
    }else{
      head= node;
      tail= node;
    }
    length++;
  };
  this.atInsert = function(position, element){
    var current=head;
    var previous;
    var node = new Node(element);
    if(position>-1 && position<length){
      if(position === 0){
        head=node;
        head.next=current;
        current.prev=head;
      }else{
        while(position--){
          previous=current;
          current=current.next;
        }
        previous.next = node;
        node.prev = previous;
        node.next = current;
        }
        length++;
        return true;
      }else{
        return false;
      }
  };
  this.removeAt = function(position){
    var current=head;
    var previous;
    if(position>-1 && position<length){
      if(position === 0){
        head=current.next;
        if(!head){
          tail = null;
        }else{
          head.prev = null;
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
          tail = previous;
        }
      }
      length--;
      return true;
    }else{
      return false;
    }
  };
  this.remove = function(element){
    var position = this.indexOf(element);
    if(position !== null){
      this.removeAt(position);
      return true;
    }else{
      return false;
    }
  };
  this.indexOf = function(element){
    var current=head;
    var position = 0;
    while(element !== current.element){
      if(current.next){
        current=current.next;
        ++position;
      }else{
        break;
      }
    }
    return position<length ? position : null;
  };
  this.isEmpty = function(){
    return !this.size();
  };
  this.size = function(){
    return length;
  };
  this.toString = function(){
    var arr = [];
    current=head;
    while(current){
      arr.push(current.element);
      current = current.next;
    }
    return arr ==[] ? arr.toString() : null;
  };
  this.print = function(){
    current=head;
    while(current){
      console.log(current.element);
      current = current.next;
    }
  };
  this.head=function(){
    return head?head.element:null;
  }
  this.tail=function(){
    return tail?tail.element:null;
  }
}

//测试用例
var d=new DoublyLinkedList();

d.append(0);
d.append(1);
d.append(2);
d.append(3);
d.append(4);
