import mergeSort from "./mergeSort";

console.log('Autobots ROLL OUT!!!');

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

    buildTree(arr = this.array, start = arr[0], end = arr.length - 1) {

        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(arr[mid]);

        // Divide from middle element
        root.left = this.buildTree(arr, start, mid - 1);
        root.right = this.buildTree(arr, mid + 1, end);

        return root;

    }

    printTree() {

      prettyPrint(this.root);

      return this.root;

    }

    insert(value) {

      this.root.left.left.left = new Node(value);

      console.log(this.root.left.left);
      console.log(this.root.left.left.left);

      

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

let myArray = [1, 7, 4, 23, 8, 9, 3, 5, 67, 6345, 324];

const weirwood = new Tree(myArray);
console.log(weirwood);
console.log(weirwood.array);

console.log(weirwood.buildTree());
console.log(weirwood.printTree());

// weirwood.insert(2);
weirwood.root.left.left.left = new Node(2);
// console.log(weirwood.root.left.left);
// console.log(weirwood.root.left.left.left);

console.log(weirwood.printTree());



