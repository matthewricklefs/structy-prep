/*

Best Bridge

Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land.

Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.

Steps to Reproduce:
1. Find one island
2. BFS toward the other island
3. Count distance

*/

const grid = [
  ['W', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'L'],
  ['L', 'L', 'L', 'W', 'L'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
];

const bestBridge = (grid) => {
  let mainIsland;

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const potentialIsland = traverseIsland(grid, r, c, new Set());

      if (potentialIsland.size > 0) {
        mainIsland = potentialIsland;
        break;
      }
    }
  }

  const visited = new Set(mainIsland);
  const queue = [];

  for (let pos of mainIsland) {
    const [r, c] = pos.split(',').map(Number);
    queue.push([r, c, 0]);
  }

  while (queue.length > 0) {
    const [r, c, distance] = queue.shift();
    const position = r + ',' + c;

    if (grid[r][c] === 'L' && !mainIsland.has(position)) {
      return distance - 1;
    }

    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = r + deltaRow;
      const neighborCol = c + deltaCol;
      const neighborPos = neighborRow + ',' + neighborCol;

      if (
        isInbounds(grid, neighborRow, neighborCol) &&
        !visited.has(neighborPos)
      ) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const isInbounds = (grid, r, c) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  return rowInbounds && colInbounds;
};

const traverseIsland = (grid, r, c, visited) => {
  if (!isInbounds(grid, r, c) || grid[r][c] === 'W') return visited;

  const position = r + ',' + c;
  if (visited.has(position)) return visited;
  visited.add(position);

  traverseIsland(grid, r - 1, c, visited);
  traverseIsland(grid, r + 1, c, visited);
  traverseIsland(grid, r, c - 1, visited);
  traverseIsland(grid, r, c + 1, visited);

  return visited;
};

console.log(bestBridge(grid)); // -> 1
