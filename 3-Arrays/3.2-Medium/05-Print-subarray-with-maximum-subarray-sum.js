// Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
// A subarray is a contiguous non-empty sequence of elements within an array.


var maxSubArray = function(nums) {
    let n = nums.length;
    let currentSum = 0;
    let maxSum = -Infinity;
    let start = 0;
    let ansStart = -1;
    let ansEnd = -1;
    for (let i = 0; i < n; i++) {
        if (currentSum === 0) {
            start = i;
        }
        currentSum += nums[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
            ansStart = start;
            ansEnd = i;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return {
        maxSum: maxSum,
        indices: [ansStart, ansEnd],
        subarray: nums.slice(ansStart, ansEnd + 1)
    }
};