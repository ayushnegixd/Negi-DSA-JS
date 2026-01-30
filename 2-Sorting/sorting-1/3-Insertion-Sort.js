// Given an array of integers called nums, sort the array in non-decreasing order using the insertion sort algorithm and return the sorted array.

// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.


class Solution {
    insertionSort(nums) {
        let n = nums.length;
        for (let i = 1; i < n; i++){
            let j = i;
            while (j > 0 && nums[j-1] > nums[j]) {
                let temp = nums[j-1];
                nums[j-1] = nums[j];
                nums[j] = temp;
                j--;
            }
        }
        return nums;
    }
};