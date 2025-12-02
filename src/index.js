import mergeSort from "./mergeSort";

console.log('Autobots ROLL OUT!!!');

let loop = 0;

class Node {

    constructor(data = '', left = null, right = null) {

        this.data = data;
        this.left = left;
        this.right = right;

    }

};

class Tree {

  constructor(array) {

    this.array = mergeSort(array);
    this.root = this.buildTree(this.array);

  }

  buildTree(arr = this.array, start = 0, end = arr.length - 1) {

    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arr[mid]);

    // loop++
    // console.log('LOOP NUMBER '+loop);
    // console.log('start: '+arr[start]+' (Index '+start+')');
    // console.log('end: '+arr[end]+' (Index '+end+')');
    // console.log('mid: '+arr[mid]+' (Index '+mid+')');

    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);

    return root;

  }

  printTree() {

    prettyPrint(this.root);

    return this.root;

  }

  insert(value, root = this.root) {

    if (root === null) return new Node(value);
    // console.log(root);
    // console.log(root.left);
    // console.log(root.right);

    if (value < root.data)
      root.left = this.insert(value, root.left);
    else
      root.right = this.insert(value, root.right);

    return root;

  }

  getInorderSuccessor(curr) {

    curr = curr.right;

    while (curr !== null && curr.left !== null)

      curr = curr.left;

    return curr;

  }

  deleteItem(value, root = this.root) {

    if (root === null)

      return root;

    if (root.data > value)

      root.left = this.deleteItem(value, root.left);

    else if (root.data < value)

      root.right = this.deleteItem(value, root.right);

    else {

      // Node with 0 or 1 child
      if (root.left === null)

        return root.right;

      if (root.right === null)

        return root.left;

      // Node with 2 children
      const succ = this.getInorderSuccessor(root);

      root.data = succ.data;

      root.right = this.deleteItem(succ.data, root.right);

    }

  return root;

  }

  find(value) {

    let curr = this.root;
    
    if ((typeof value) != 'number') {

      return 'Invalid value';

    }

    if (curr === null) {

      return 'Tree is empty';

    }

    while (curr != null) {

      // console.log('WE BE LOOPIN! CURR: '+curr.data);

      if (curr.data > value) {
     
        curr = curr.left;

      } else if (curr.data < value) {

        curr = curr.right;

      } else if (curr.data == value) {

        return curr;

      }

    }

    return 'Value not found!'

  }

  levelOrderForEach(myCallback = function(root) {console.log('Root data is: '+root.data)
  }, root = this.root) {

    if (!myCallback) {
      throw new Error('Callback function required')
    }

    let queue = [root];
    
    while (queue.length >= 1) {

      root = queue[0];

      myCallback(root);
      
      if (root.left != null) queue.push(root.left);
      if (root.right != null) queue.push(root.right);
      
      queue.shift();

    }

  }

  preOrderForEach(myCallback = function(root) {console.log('Root data is: '+root.data)
  }, root = this.root) {

    if (!myCallback) {
      throw new Error('Callback function required')
    }

    if (root == null) return;
    
    myCallback(root);

    this.preOrderForEach(myCallback, root.left);
    this.preOrderForEach(myCallback, root.right);

  }

  inOrderForEach(myCallback = function(root) {console.log('Root data is: '+root.data)
  }, root = this.root) {

    if (!myCallback) {
      throw new Error('Callback function required')
    }

    if (root == null) return;
    
    this.inOrderForEach(myCallback, root.left);

    myCallback(root);

    this.inOrderForEach(myCallback, root.right);

  }

  postOrderForEach(myCallback = function(root) {console.log('Root data is: '+root.data)
  }, root = this.root) {

    if (!myCallback) {
      throw new Error('Callback function required')
    }

    if (root == null) return;
    
    this.postOrderForEach(myCallback, root.left);
    this.postOrderForEach(myCallback, root.right);

    myCallback(root);

  }

  depth(value, curr = this.root) {
    
    if ((typeof value) != 'number') {

      return 'Invalid value';

    }

    if (curr === null) {

      return 'Tree is empty';

    }

    let steps = 0;

    while (curr != null) {

      // console.log('WE BE LOOPIN! CURR: '+curr.data);

      if (curr.data > value) {

        // console.log(curr);

        steps++
     
        curr = curr.left;

      } else if (curr.data < value) {

        // console.log(curr);

        steps++

        curr = curr.right;

      } else if (curr.data == value) {

        return steps;

      }

    }

  }

  height(value = this.root.data) {

    let root = this.find(value);

    let queue = [root];
    
    let maxSteps = 0;
    let currSteps = 0;
    
    while (queue.length >= 1) {

      root = queue[0];

      currSteps = this.depth(root.data, this.find(value));
      
      if (currSteps > maxSteps) maxSteps = currSteps;
      
      if (root.left != null) queue.push(root.left);
      if (root.right != null) queue.push(root.right);
      
      queue.shift();

    }

    return maxSteps;

  }

  nodeBalance(root = this.root) {

    let leftHeight;
    let rightHeight;

    if (root.left == null) leftHeight = 0;
    else leftHeight = this.height(root.left.data);

    if (root.right == null) rightHeight = 0;
    else rightHeight = this.height(root.right.data);

    // console.log('leftHeight is: '+leftHeight);
    // console.log('rightHeight is: '+rightHeight);
    
    if (Math.abs(leftHeight - rightHeight) <= 1) return 0;
    else return 1;

  }

  isBalanced() {

    let root = this.root;

    let queue = [root];
    
    let counter = 0;
    
    while (queue.length >= 1) {

      root = queue[0];
      console.log(root);
      
      counter += this.nodeBalance(root);
      
      if (root.left != null) queue.push(root.left);
      if (root.right != null) queue.push(root.right);
      
      queue.shift();

    }

    if (counter == 0) return 'Tree is balanced';
    if (counter > 0) return 'Tree is unbalanced'

  }

  rebalance() {

    myArray = [];

    this.preOrderForEach(function(root) {myArray.push(root.data)});

    this.array = mergeSort(myArray);

    this.root = this.buildTree();

    this.printTree();

    return this.root;

  }

};

const prettyPrint = (node, prefix = '', isLeft = true) => {

  if (node === null) {

    return;

  }

  if (node.right !== null) {

    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);

  }

  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

  if (node.left !== null) {

    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);

  }

};

let myArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// myArray = [1, 7, 4, 23, 8, 9, 3, 5, 67, 6345, 324];
myArray = [1, 2, 3, 4, 5];
myArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];




const weirwood = new Tree(myArray);
console.log(weirwood);
console.log(weirwood.array);
// console.log(weirwood.printTree());

weirwood.insert(899);  
weirwood.insert(898);  
weirwood.insert(897);  
weirwood.insert(896);  
 

// weirwood.insert(6);
// weirwood.deleteItem(67);
// console.log(weirwood.find(5));
console.log(weirwood.printTree());

// the ".this" is lost when function is used as calllback. Need to use bind method to link function to desired this
// weirwood.levelOrderForEach(weirwood.find.bind(weirwood));
// weirwood.levelOrderForEach();
// weirwood.preOrderForEach();
// weirwood.inOrderForEach();
// weirwood.postOrderForEach();
// console.log(weirwood.findSteps(400));
// console.log(weirwood.height(800));
// console.log(weirwood.height(200));
// console.log(weirwood.depth(897));
// console.log(weirwood.isBalanced());
// console.log(weirwood.nodeBalance());
// console.log(weirwood.isBalanced());
console.log(weirwood.rebalance());









