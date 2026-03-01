// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// brute force approach
// Time Complexity: O(n^3)
// Space Complexity: O(1)

var subarraySum = function(nums, k) {
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let m = i; m <= j; m++) {
                sum += nums[m];
            }
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
};

// better approach (prefix sum)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var subarraySum = function(nums, k) {
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
};

// optimal approach (hash map)
// Time Complexity: O(n)
// Space Complexity: O(n)

var subarraySum = function(nums, k) {
    let n = nums.length;
    let count = 0;
    let sum = 0;
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1); // Base case: there's one way to have a sum of 0 (by taking no elements)
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        if (prefixSumCount.has(sum - k)) {
            count += prefixSumCount.get(sum - k);
        }
        prefixSumCount.set(sum, (prefixSumCount.get(sum) || 0) + 1);
    }
    return count;
};  