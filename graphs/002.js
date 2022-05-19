/*

Has Path

Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

*/

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const hasPath = (graph, src, dst) => {};
console.log(hasPath(graph, 'f', 'k')); // true

const recursivePath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (recursivePath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};
console.log(recursivePath(graph, 'f', 'k')); // true

const breadthPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};
console.log(breadthPath(graph, 'f', 'k')); // true
