/*

Island Count

Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of a land.

*/

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }

  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInBounds) return false;
  if (grid[r][c] === 'W') return false;

  const position = r + ',' + c;
  if (visited.has(position)) return false;
  visited.add(position);

  // above
  explore(grid, r - 1, c, visited);
  // below
  explore(grid, r + 1, c, visited);
  // left
  explore(grid, r, c - 1, visited);
  // right
  explore(grid, r, c + 1, visited);

  // I've finished visiting a brand new island
  return true;
};

console.log(islandCount(grid)); // -> 3
