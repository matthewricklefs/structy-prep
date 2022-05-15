/*
Depth First Values
Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing:
    all values of the tree in depth-first order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Traditionally, DFT will use stack
// With a stack: FILO
// - You can only remove from the top of the stack
// - Add the values into the list when something leaves the stack.

// Iterative Approach
// Time Complexity:
//    n = # of nodes
//    Time: O(n)
// Space Complexity:
//    Space: O(n)

const depthFirstValues = (root) => {
  const result = [];
  const stack = [root];

  // is the stack empty
  while (stack.length > 0) {
    // if input is an empty tree
    if (root === null) return [];

    // declare current var and remove (pop) top element
    const current = stack.pop();
    result.push(current.val);

    // check if left/right children exist push children to stack
    // favors RIGHT branch
    // if (current.left) stack.push(current.left);
    // if (current.right) stack.push(current.right);

    // check if left/right children exist push children to stack
    // favors LEFT branch
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};

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

console.log(depthFirstValues(a));
