/*

Tree Value Count

Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

const treeValueCount = (root, target) => {
  if (root === null) return 0;

  const stack = [root];
  let count = 0;

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val === target) {
      count += 1;
    }

    if (current.left !== null) {
      stack.push(current.left);
    }

    if (current.right !== null) {
      stack.push(current.right);
    }
  }

  return count;
};

console.log(treeValueCount(a, 6)); // -> 3

const recursiveTreeValueCount = (root, target) => {
  if (root === null) return 0;

  const match = root.val === target ? 1 : 0;

  return (
    match +
    recursiveTreeValueCount(root.left, target) +
    recursiveTreeValueCount(root.right, target)
  );
};

console.log(recursiveTreeValueCount(a, 6)); // -> 3
