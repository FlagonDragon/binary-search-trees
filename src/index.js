import mergeSort from "./mergeSort";

console.log('Autobots ROLL OUT!!!');

class Node {

    constructor(data = '', left = '', right = '') {

        this.data = data;
        this.left = left;
        this.right = right;

    }

};

class Tree {

    constructor(array = '', root = '') {

        this.array = array;
        this.root = root;

    }

    buildTree(arr, start = arr[0], end = arr.length - 1) {

        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(arr[mid]);

        // Divide from middle element
        root.left = this.buildTree(arr, start, mid - 1);
        root.right = this.buildTree(arr, mid + 1, end);

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

let myArray = [1, 23, 8, 4, 3, 5, 7, 9, 67, 6345, 324];

myArray = mergeSort(myArray);
console.log(myArray);


const weirwood = new Tree(myArray);

console.log(weirwood);

console.log(weirwood.buildTree(weirwood.array));

console.log(prettyPrint(weirwood.buildTree(weirwood.array)));
