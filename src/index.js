import Tree from "./BST";

console.log('Autobots ROLL OUT!!!');

function script() {

  let myArray = [];

  let i = 0;
  while (i < 7) {
    myArray.push(Math.floor(Math.random()*100))
    i++
  }

  const galathilion = new Tree(myArray);

  console.log(galathilion.printTree());

  console.log(galathilion.isBalanced());
  // console.log(galathilion.height(galathilion.root.left.data));
  // console.log(galathilion.height(galathilion.root.right.data));
  // console.log(galathilion.height());

  console.log('LEVEL ORDER: --------------------');
  galathilion.levelOrderForEach();
  console.log('PRE ORDER: --------------------');
  galathilion.preOrderForEach();
  console.log('IN ORDER: --------------------');
  galathilion.inOrderForEach();
  console.log('POST ORDER: --------------------');
  galathilion.postOrderForEach();

  galathilion.insert(101);
  galathilion.insert(102);
  galathilion.insert(103);
  console.log(galathilion.printTree());
  console.log(galathilion.isBalanced());

  console.log(galathilion.rebalance());
  console.log(galathilion.isBalanced());
  
  console.log('LEVEL ORDER: --------------------');
  galathilion.levelOrderForEach();
  console.log('PRE ORDER: --------------------');
  galathilion.preOrderForEach();
  console.log('IN ORDER: --------------------');
  galathilion.inOrderForEach();
  console.log('POST ORDER: --------------------');
  galathilion.postOrderForEach();
  
  return ':)';

};

console.log(script());


