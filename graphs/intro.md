# Graphs

<hr />

## What is a graph

- A collection of nodes and edges.
- Nodes are typically circular structures with data inside of them.
  - Sometimes referred to as a "vortex".
- The edge would be considered the path between the nodes.
  - Also known to represent the relationship between the nodes.
  <hr />

### Directed & Undirected Graphs

- A Directed Graph will have arrowheads along the edges
  - One must obey the direction of the arrow paths
  - If one was situated at a particular node
    - The edge(s) it could lead to would be considered "Neighbor Nodes".
      <br />
- A Undirected Graph will not have directionality about it.
  - One could consider this similar to a 2-way street.
  <hr />

### Adjacency List

- Typically uses a Hash Map Data Structure as a form of representation for the adjacency list.
- Represented by Objects (in JavaScript) with a series of key/value pairs.
  - The keys would be considered as the nodes within the graphs.
  - The values would be represented as an array of elements - The elements within the array would be considered the "Neighbor Nodes" - A Key (Node) with no values in the array would be considered to have no neighbor nodes.
  <hr />

### Must Know Algos

- Some sort of a traversal
- Depth First Traversal

  - What order would it give us? - Following this approach, we could travel to the following neighbor nodes. - You must follow the directionality of the graph to be considered a true DFT.
    <br />

#### Depth First: Stack

-

- Breadth First Traversal

  - A true BFT approach would begin traveling from the current node to one neighbor and then again from that same node to any other neighboring nodes.
  - As soon as there are no longer any neighbor nodes to travel toward, the algorithm will then recreate the process starting from what were the neighboring nodes to all of their neighboring nodes.
  - In an undirected graph, the BFT algo will tend to explore all directions evenly instead of favoring one direction all the way through.
