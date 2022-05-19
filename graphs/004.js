/*

Connected Components Count

Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.


*/

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    // DFT (recursive)
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }

  return count;
};

// recursive helper func
const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  console.log(visited);

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // -> 2
