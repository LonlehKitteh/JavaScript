# Linked List Cycle Detection

## Problem Statement

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, `pos` is used to denote the index of the node that tail's next pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

## Approach

To detect a cycle in a linked list, we can use the Floyd's Tortoise and Hare algorithm, also known as the slow and fast pointer approach. In this approach, we use two pointers, one moving at twice the speed of the other. If there is a cycle, the fast pointer will eventually catch up to the slow pointer, indicating the presence of a cycle.

1. Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.
2. Move `slow` one step at a time and `fast` two steps at a time.
3. If `fast` encounters a `null` node or reaches the end of the list, return `false` as there is no cycle.
4. If `fast` and `slow` pointers meet at any point, return `true` as there is a cycle in the linked list.

## Complexity Analysis

- Time complexity: O(n)
- Space complexity: O(1)
