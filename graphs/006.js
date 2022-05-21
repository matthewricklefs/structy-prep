const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  // if something is added to the queue it should also be marked as visited
  // to initialize a Set constructor with values you have to pass in an array containing said values
  const visited = new Set([nodeA, 0]);

  // set up queue
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    // BFT always removes element from the front of queue;
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      // only if neighbor has not been visited will it be added to queue
      if (!visited.has(neighbor)) {
        // add neighbors to queue
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  // create adjacency list
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
