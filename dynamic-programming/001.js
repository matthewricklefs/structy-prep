/*

Fib

Write a function fib that takes in a number argument, n, and return the n-th number of the Fibonacci sequence.

the 0-th number of the sequence is 0.
the 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate, the sum of previous two numbers.

Solve this recursively.

*/

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(0)); // -> 0
console.log(fib(1)); // -> 1
console.log(fib(6)); // -> 8
