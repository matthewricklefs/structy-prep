/*

All Tree Paths

Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

You may assume that the input tree in non-empty.

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

const recursiveAllTreePaths = (root) => {
  // empty tree
  if (root === null) return [];
  // finding the leaf nodes
  if (root.left === null && root.right === null) return [[root.val]];

  const treePaths = [];
  const leftTreePath = recursiveAllTreePaths(root.left);
  // [
  //   [b, d],
  //   [b, e]
  // ]

  for (let subPath of leftTreePath) {
    treePaths.push([root.val, ...subPath]);
  }

  const rightTreePath = recursiveAllTreePaths(root.right);
  // [
  //   [c, f]
  // ]
  for (let subPath of rightTreePath) {
    treePaths.push([root.val, ...subPath]);
  }

  return treePaths;
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(recursiveAllTreePaths(a)); // ->

// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]
