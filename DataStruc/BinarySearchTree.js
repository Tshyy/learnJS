function Node(key){
  this.key=key;
  this.left = null;
  this.right = null;
}

function insertNode(node, newNode){
  if(newNode.key<node.key){
    if(node.left === null){
      node.left = newNode;
    }else{
      insertNode(node.left,newNode);
    }
  }else{
    if(node.right === null){
      node.right = newNode;
    }else{
      insertNode(node.right,newNode);
    }
  }
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype = {
  constructor : BinarySearchTree,
  insert : function(key){
    var node = new Node(key);
    if (this.root === null){
      this.root = node;
    }else{
      insertNode(this.root, node);
    }
  },
  search : function(key, node = this.root){
    if (node === null){
      return false;
    }
    if (key < node.key){
      this.search(key, node.left);
    }else if(key > node.key){
      this.search(key, node.right);
    }else {
      return true;
    }
  },
  inOrderTraverse : function(callback,node=this.root){
    if(node !== null){
      this.inOrderTraverse(callback,node.left);
      callback(node.key);
      this.inOrderTraverse(callback,node.right);
    }
  },
  preOrderTraverse : function(callback,node=this.root){
    if(node !== null){
      callback(node.key);
      this.preOrderTraverse(callback,node.left);
      this.preOrderTraverse(callback,node.right);
    }
  },
  postOrderTraverse : function(callback,node=this.root){
    if(node !== null){
      this.postOrderTraverse(callback,node.left);
      this.postOrderTraverse(callback,node.right);
      callback(node.key);
    }
  },
  min : function(node = this.root){
    if(node){
      while (node && node.left){
        node = node.left;
      }
      return node.key;
    }
    return null;
  },
  max : function(node = this.root){
    if(node){
      while(node && node.right){
        node = node.right;
      }
      return node.key;
    }
    return null;
  },
  removeNode : function(key, node = this.root){
    if (node === null){
      return null;
    }
    if (key < node.key){
      node.left = this.removeNode(key, node.left);
      return node;
    }else if (key > node.key){
      node.right = this.removeNode(key, node.right);
      return node;
    }else{
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }else if(node.left !== null){
        node = node.left;
        return node;
      }else if(node.right !== null){
        node = node.right;
        return node;
      }
      else{
        var min = this.min(node.right);
        this.removeNode(min.key, node.right);
        node = min;
        return node;
      }
    }
  }
}


//测试用例
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

tree.max()

tree.min()

function printNode(value){
console.log(value);
}
tree.inOrderTraverse(printNode);

tree.preOrderTraverse(printNode);

tree.postOrderTraverse(printNode);

tree.search(3);
