/*

Count Paths

Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls.

The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

*/

const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  const position = r + ',' + c;
  if (position in memo) return memo[position];
  // check if we are in bounds or if we hit a wall on the way
  if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;
  // check if we hit our target (begin to accumulate a count)
  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;
  // the number of ways to travel to the bottom right corner by traveling down
  const downCount = countPaths(grid, r + 1, c, memo);
  // the number of ways to travel to the bottom right corner by traveling right
  const rightCount = countPaths(grid, r, c + 1, memo);

  memo[position] = downCount + rightCount;
  return memo[position];
};

const grid = [
  ['O', 'O'],
  ['O', 'O'],
];
console.log(countPaths(grid)); // -> 2

const grid2 = [
  ['O', 'O', 'X'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
];
console.log(countPaths(grid2)); // -> 5
