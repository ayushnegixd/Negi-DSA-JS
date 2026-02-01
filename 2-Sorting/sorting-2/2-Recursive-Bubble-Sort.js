// Given an array of integers nums, sort the array in non-decreasing order using the recursive Bubble Sort algorithm, and return the sorted array.

// You must implement Bubble Sort using recursion only.
// Do not use built-in sorting functions (sort, sorted, Arrays.sort, etc.).
// A sorted array in non-decreasing order is an array where each element is greater than or equal to the previous one.


class Solution {
    bubbleSort(nums) {
        // Recursive function to handle the "passes"
    // n = size of the unsorted portion of the array
    function recursiveBubbleSort(n) {
        // 1. Base Case: If 1 element left, it is sorted
        if (n === 1) return;

        let didSwap = false;

        // 2. The "Bubbling" Step (Iterative)
        // Push the largest element to index n-1
        for (let i = 0; i < n - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                // Swap elements
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                didSwap = true;
            }
        }

        // Optimization: If no swaps happened, array is fully sorted
        if (!didSwap) return;

        // 3. Recursive Call
        // Array is now sorted up to index n-1. 
        // Call for the remaining n-1 elements.
        recursiveBubbleSort(n - 1);
    }

    // Start recursion with the full length of the array
    recursiveBubbleSort(nums.length);
    
    return nums;
    }
};