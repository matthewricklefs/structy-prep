/*

Longest Path

Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.

*/

const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
};

const graph2 = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: [],
};

const longestPath = (graph) => {
  const distance = {};

  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }

  for (let node in graph) {
    traverseDistance(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];

  let maxLength = 0;

  for (let neighbor of graph[node]) {
    const attempt = traverseDistance(graph, neighbor, distance);

    if (attempt > maxLength) maxLength = attempt;
  }

  distance[node] = 1 + maxLength;
  return distance[node];
};

console.log(longestPath(graph)); // -> 2
console.log(longestPath(graph2)); // -> 4
