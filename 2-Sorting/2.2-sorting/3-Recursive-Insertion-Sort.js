// Given an array of integers nums, sort the array in non-decreasing order using the recursive Insertion Sort algorithm, and return the sorted array.

// You must implement Insertion Sort using recursion only.
// Do not use loops (like for or while) or built-in sorting functions (sort, Arrays.sort, etc.).
// A sorted array in non-decreasing order is an array where each element is greater than or equal to all elements that come before it.


class Solution {
    insertionSort(nums) {
        // 1. Inner Recursive Function (Replaces the 'while' loop)
    // Goal: Place 'val' into the sorted subarray ending at index 'j'
    function insert(val, j) {
        // Base Case: 
        // 1. We reached the start of the array (j < 0)
        // 2. OR we found an element smaller than 'val'
        if (j < 0 || nums[j] <= val) {
            nums[j + 1] = val;
            return;
        }

        // Action: Shift the current element to the right
        nums[j + 1] = nums[j];

        // Recursive Step: Check the next element to the left
        insert(val, j - 1);
    }

    // 2. Outer Recursive Function (Replaces the 'for' loop)
    // Goal: Sort the first 'n' elements
    function recursiveInsertionSort(n) {
        // Base Case: An array of size 1 is already sorted
        if (n <= 1) return;

        // Recursive Step: Sort the first n-1 elements first
        recursiveInsertionSort(n - 1);

        // Action: Take the nth element (at index n-1) and insert it
        // into the already sorted subarray (indices 0 to n-2)
        let last = nums[n - 1];
        insert(last, n - 2);
    }

    // Start the recursion
    recursiveInsertionSort(nums.length);
    return nums;
    }
};