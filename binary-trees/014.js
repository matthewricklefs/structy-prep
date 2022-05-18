/*

Level Averages

Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

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

const levelAverages = (root) => {
  if (root === null) return [];

  const levels = [];
  const stack = [{ node: root, levelNum: 0 }];

  while (stack.length > 0) {
    const { node, levelNum } = stack.pop();

    if (levels.length === levelNum) {
      levels.push([node.val]);
    } else {
      levels[levelNum].push(node.val);
    }

    if (node.left !== null) {
      stack.push({ node: node.left, levelNum: levelNum + 1 });
    }

    if (node.right !== null) {
      stack.push({ node: node.right, levelNum: levelNum + 1 });
    }
  }

  let levelAverageArray = [];

  for (level in levels) {
    let levelSum = levels[level].reduce((a, b) => a + b);
    levelSum = levelSum / levels[level].length;
    levelAverageArray.push(levelSum);
  }

  return levelAverageArray;
};

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
