/*

Has Cycle

Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.

white-gray-black algorithm
  - Cycle Detection Algorithm
  - The 3 colors represent 3 sets
    - Each set represents a state of each node as we traverse through them.
    - White: Unexplored
    - Gray: Visiting (In Progress)
    - Black: Full Visited

*/

const hasCycle = (graph) => {
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    if (cycleDetect(graph, node, visiting, visited) === true) {
      return true;
    }
  }

  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (cycleDetect(graph, neighbor, visiting, visited) === true) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

console.log(
  hasCycle({
    a: ['b'],
    b: ['c'],
    c: ['a'],
  })
); // -> true
