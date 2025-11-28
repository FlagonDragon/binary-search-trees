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
myArray = [3, 4, 5];

const weirwood = new Tree(myArray);
console.log(weirwood);
console.log(weirwood.array);

// console.log(weirwood.buildTree());
console.log(weirwood.printTree());

weirwood.insert(2);
console.log(weirwood.printTree());




