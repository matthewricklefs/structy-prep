/*

Prereqs Possible

Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. 

A single prerequisite of [A, B] means that course A must be taken before course B. 

The function should return a boolean indicating whether or not it is possible to complete all courses.

*/

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];

const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);
  const visiting = new Set();
  const visited = new Set();

  for (let node in graph) {
    if (detectCycle(graph, node, visiting, visited)) {
      return false;
    }
  }

  return true;
};

const detectCycle = (graph, node, visiting, visited) => {
  if (visiting.has(node)) return true;
  if (visited.has(node)) return false;
  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (detectCycle(graph, neighbor, visiting, visited)) {
      return true;
    }
  }

  visiting.delete(node);
  visited.add(node);

  return false;
};

const buildGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let course = 0; course < numCourses; course += 1) {
    graph[course] = [];
  }

  for (let prereq of prereqs) {
    const [courseA, courseB] = prereq;
    graph[courseA].push(String(courseB));
  }

  return graph;
};

console.log(prereqsPossible(numCourses, prereqs)); // -> true
