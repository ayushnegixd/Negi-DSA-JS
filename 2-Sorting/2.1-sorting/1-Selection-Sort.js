// Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and return the sorted array.

// A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous elements in the array.


class Solution {
    selectionSort(nums) {
        let n = nums.length;
        for (let i = 0; i < n - 1; i++) {
            let minindex = i;
            for (let j = i + 1; j < n; j++) {
                if (nums[j] < nums[minindex]) {
                    minindex = j;
                }
            }
            if (minindex !== i){
                let temp = nums[i];
                nums[i] = nums[minindex];
                nums[minindex] = temp;
            }
        }
        return nums;
    }
};