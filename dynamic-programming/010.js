/*

Array Stepper

Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.

For example, given:

    idx =  0  1  2  3  4  5
numbers = [2, 4, 2, 0, 0, 1]

The answer is true.
We start at idx 0, we could take 1 step or 2 steps forward.
The correct choice is to take 1 step to idx 1.
Then take 4 steps forward to the end at idx 5.

*/

const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];

  if (i >= nums.length - 1) return true;

  const maxStep = nums[i];

  for (let step = 1; step <= maxStep; step += 1) {
    if (arrayStepper(nums, i + step, memo) === true) {
      memo[i] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};

console.log(arrayStepper([2, 4, 2, 0, 0, 1])); // -> true
console.log(arrayStepper([2, 3, 2, 0, 0, 1])); // -> false
