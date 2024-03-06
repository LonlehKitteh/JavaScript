# Minimum Length of String after Deleting Similar Ends

## Algorithm Overview

Given a string s, this algorithm aims to return the length of s after deleting similar ends.

## Approach: Two Pointers

## Intuition

After deleting similar ends, the goal is to find the number of characters remaining in s. The prefix and suffix can be deleted when the characters at the beginning and end of s are the same. We can achieve this by using two pointers: begin and end.

## Complexity Analysis

- Time complexity: O(n)
- Space complexity: O(1)
