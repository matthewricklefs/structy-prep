/*
Breadth First Values

Write a function: breadthFirstValues
- that takes in the root of a binary tree. 
- The function should return an array:
  - containing all values of the tree in breadth-first order.

Breadth First Traversal: a -> b -> c -> d -> e -> f
  - Typically a Queue Data Structure
  - 
*/

// Iterative Approach
// Time Complexity:
//    n = # of nodes
//    Time: O(n)
//      - if adding something and removing something from the queue
//      - runs in constant time.
// Space Complexity:
//    Space: O(n)

// a BF Traversal needs a queue order...
// a DF Traversal usually needs a stack order...

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

const iterativeBFV = (root) => {
  if (root === null) return [];

  const queue = [root];
  const values = [];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return values;
};

console.log(iterativeBFV(a));
