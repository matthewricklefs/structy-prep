/*

Max Root to Leaf Path Sum

Write a function, maxPathSum, that takes in the root of a binary tree
that contains number values. The function should return the maximum sum
of any root to leaf path within the tree.

You may assume that the input tree in non-empty.

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

const maxPathSum = (root) => {
  let largest = -Infinity;
  let stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val > largest) largest = current.val;

    if (current.left !== null) {
      stack.push(current.left);
    }

    if (current.right !== null) {
      stack.push(current.right);
    }
  }

  return largest;
};

const recursiveMaxPathSum = (root) => {
  // if our current child has no left or right
  // node, we prepare this edge case;
  if (root === null) return -Infinity;
  // if we travel to leaf nodes with no children, this is our base case.
  if (root.left === null && root.right === null) return root.val;

  const maxChildPathSum = Math.max(
    recursiveMaxPathSum(root.left),
    recursiveMaxPathSum(root.right)
  );

  return root.val + maxChildPathSum;
};

console.log(recursiveMaxPathSum(a)); // -> 18
