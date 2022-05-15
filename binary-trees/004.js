/*
  Tree Sum

  Write a function, treeSum, that takes in the root of a
  binary tree that contains number values. The function
  should return the total sum of all values in the tree.
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

// Iterative Approach
const iterTreeSum = (root) => {
  if (root === null) return 0;

  let totalSum = 0;
  let queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return totalSum;
};

console.log(iterTreeSum(a));
console.log(iterTreeSum(null));

// Recursive Approach
const recursiveTreeSum = (root) => {
  if (root === null) return 0;

  let total = 0;
  total += root.val;

  const leftValues = recursiveTreeSum(root.left);
  total += leftValues;

  const rightValues = recursiveTreeSum(root.right);
  total += rightValues;

  return total;
};

console.log(recursiveTreeSum(a));
console.log(recursiveTreeSum(null));
