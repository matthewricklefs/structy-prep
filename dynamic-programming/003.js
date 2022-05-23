/*

Sum Possible

Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.

*/

// Brute Force

const sumPossible = (amount, numbers) => {
  if (amount === 0) return true;
  if (amount < 0) return false;

  for (let num of numbers) {
    if (sumPossible(amount - num, numbers) === true) {
      return true;
    }
  }

  return false;
};

console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4
console.log(sumPossible(15, [6, 2, 10, 19])); // -> false
console.log(sumPossible(103, [6, 20, 1]) + '\n'); // -> true

// Memoization
const memoSum = (amount, numbers, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return true;
  if (amount < 0) return false;

  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
};

console.log(memoSum(8, [5, 12, 4])); // -> true, 4 + 4
console.log(memoSum(15, [6, 2, 10, 19])); // -> false
console.log(memoSum(103, [6, 20, 1])); // -> true
