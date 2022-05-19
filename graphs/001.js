const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

// Use a stack to implement Depth First Traversal
const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};
console.log(depthFirstPrint(graph, 'a'));

// recursive depth strategy
const recursiveDepthPrint = (graph, source) => {
  console.log(source);

  for (let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
};
console.log(recursiveDepthPrint(graph, 'a'));

// Use a  to implement Breadth First Traversal
// consider the source as the current location
// the stack data structure may interfer with a queue structure
// usually BFT will take an iterative approach
const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};
console.log(breadthFirstPrint(graph, 'a'));
