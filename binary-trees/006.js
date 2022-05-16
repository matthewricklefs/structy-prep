/*

Tree Min Value

Write a function, treeMinValue, that takes in the root of a binary
tree that contains number values. The function sohuld return the
minimum value within the tree.

You may assume that the input tree is non-empty.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

const depthTreeMinValue = (root) => {
  let smallest = Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < smallest) {
      smallest = current.val;
    }

    if (current.left !== null) {
      stack.push(current.left);
    }

    if (current.right !== null) {
      stack.push(current.right);
    }
  }

  return smallest;
};
console.log(depthTreeMinValue(a)); // -> -2

const iterTreeMinValue = (root) => {
  let smallest = Infinity;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return smallest;
};
console.log(iterTreeMinValue(a)); // -> -2

const recursiveTreeMinValue = (root) => {
  if (root === null) return Infinity;

  const leftMin = recursiveTreeMinValue(root.left);
  const rightMin = recursiveTreeMinValue(root.right);

  return Math.min(root.val, leftMin, rightMin);
};
console.log(recursiveTreeMinValue(a)); // -> -2
