/*

Leaf List

Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const leafList = (root) => {
  if (root === null) return [];

  let leafValues = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.left === null && current.right === null) {
      leafValues.push(current.val);
    }

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }
  }

  return leafValues;
};

console.log(leafList(a)); // -> [ 'd', 'e', 'f' ]
