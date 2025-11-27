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

        console.log(arr);
        console.log(start);
        console.log(end);
        
        

        // if (start > end) return null;

        // let mid = start + Math.floor((end - start) / 2);
        // let root = new Node(arr[mid]);

        // // Divide from middle element
        // root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
        // root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

        // return this.root;
    
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

const myArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const weirwood = new Tree(myArray);

console.log(weirwood);

weirwood.buildTree(weirwood.array);