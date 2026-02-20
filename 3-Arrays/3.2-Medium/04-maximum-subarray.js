// Given an integer array nums, find the subarray with the largest sum, and return its sum.


// brute force approach
// Time Complexity: O(n^3)
// Space Complexity: O(1)

var maxSubArray = function(nums) {
    let n = nums.length;
    let maxSum = -Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k];
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};

// better approach (prefix sum)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var maxSubArray = function(nums) {
    let n = nums.length;
    let maxSum = -Infinity;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};

// optimal approach (Kadane's Algorithm)
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxSubArray = function(nums) {
    let n = nums.length;
    let currentSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < n; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};