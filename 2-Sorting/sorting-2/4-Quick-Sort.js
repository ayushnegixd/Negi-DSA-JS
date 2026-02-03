// Given an array of integers called nums, sort the array in non-decreasing order using the quick sort algorithm and return the sorted array.

// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.


class Solution {
   quickSort(nums) {
    function quickSort(arr, low, high) {
        if (low < high) {
            // pivotIndex is the position where the pivot element is placed correctly
            let pivotIndex = partition(arr, low, high);

            // Recursively sort elements before and after partition
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    // Helper function to partition the array
    function partition(arr, low, high) {
        let pivot = arr[high]; // Choosing the last element as pivot
        let i = low - 1; // Index of smaller element

        for (let j = low; j < high; j++) {
            // If current element is smaller than the pivot
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        // Swap the pivot element with the element at i+1
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    quickSort(nums, 0, nums.length - 1);
    return nums;
    }
};