/*

Undirected Path

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

*/

// avoid an infinite loop (eg. entering a cycle) by marking nodes "as visited".

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  return hasPath(graph, nodeA, nodeB, new Set());
};

// traversal through a path but also guarding for an infinite loop (adding visited var)
const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  // is src in visited?
  if (visited.has(src)) return false;

  // adds src to visited Set.
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
};

// converting an edge list to an adjacency list
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

console.log(undirectedPath(edges, 'j', 'm')); // -> true
