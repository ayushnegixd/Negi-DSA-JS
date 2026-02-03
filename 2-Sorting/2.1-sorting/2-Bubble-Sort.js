// Given an array of integers called nums,sort the array in non-decreasing order using the bubble sort algorithm and return the sorted array.

// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.


class Solution {
  bubbleSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n-1-i; j++){
        if (nums[j] > nums[j+1]) {
            let temp = nums[j];
            nums[j] = nums [j+1];
            nums[j+1] = temp;
          }
        }
      }
    return nums;
  }
};