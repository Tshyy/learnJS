/**
 * 单向链表构造函数
 * @constructor
 */
function LinkedList(){
   var Node = function(element){
     this.element = element;
     this.next = null;
   };
   var length = 0;
   var head = null;

   this.append = function(element){
     var node = new Node(element);
     if(head !== null){
       var current=head;
       while(current.next){
         current=current.next
       }
       current.next = node;
     }else{
       head= node;
     }
     length++;
   };
   this.atInsert = function(position, element){
     var current=head;
     var prev;
     var node = new Node(element);
     if(position>-1 && position<length){
       if(position === 0){
         head=node;
         head.next=current;
       }else{
         while(position--){
           prev=current;
           current=current.next;
         }
         prev.next = node;
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
     var prev;
     if(position>-1 && position<length){
       if(position === 0){
         head=current.next;
       }else{
         while(position--){
           prev=current;
           current=current.next;
         }
         prev.next=current.next;
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
}
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
