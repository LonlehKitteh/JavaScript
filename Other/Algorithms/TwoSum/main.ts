const twoSum = (nums: number[], target: number) => {
  const numsWithIndex = nums.map((num, index) => [num, index]); // maps numbers and indexes
  numsWithIndex.sort((a, b) => a[0] - b[0]); // sort them by thiers value
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = numsWithIndex[left][0] + numsWithIndex[right][0];
    if (sum === target) {
      return [numsWithIndex[left][1], numsWithIndex[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return []; // No solution found!
};
