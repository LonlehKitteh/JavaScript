# Approach: Two Sets

## Intuition

The naive approach would be to iterate through the values in the first array, `nums1`, and check whether each one is in `nums2`. If yes, add the value to the output. Such an approach would result in a less efficient solution.

To solve the problem in linear time, let's use the data structure set, which provides `in/contains` operations in **O(1)** time in the average case.

The idea is to convert both arrays into sets and then iterate over the smallest set while checking the presence of each element in the larger set.

## Algorithm

1. Initialize a set `set1` and add all elements of `nums1` to it.
2. Initialize a set `set2` and add all elements of `nums2` to it.
3. If `set1` has more elements than `set2`, swap them.
4. For each element in `set1`, add it to the result array if it also appears in `set2`.
5. Return the result array.

## Complexity Analysis

- Time complexity: **O(n + m)**, where `n` and `m` are the arrays' lengths. `O(n)` time is used to convert `nums1` into a `set`, `O(m)` time is used to convert `nums2`, and contains/in operations are `O(1)` in the average case.

- Space complexity: **O(m + n)** because in the worst case, when all elements in the arrays are unique, `n` space is used to store `set1` and `m` space is used to store `set2`.
