// You are given an integer array arr of size n which contains both positive and negative integers. Your task is to find the length of the longest contiguous subarray with sum equal to 0.
// Return the length of such a subarray. If no such subarray exists, return 0.


// brute force approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)
var maxLen = function(arr, n) {
    let maxLength = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum === 0) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    return maxLength;
};


// optimal approach (using hash map)
// Time Complexity: O(n)
// Space Complexity: O(n)
var maxLen = function(arr, n) {
    let sumIndexMap = new Map();
    let sum = 0;
    let maxLength = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum === 0) {
            maxLength = i + 1;
        } else if (sumIndexMap.has(sum)) {
            maxLength = Math.max(maxLength, i - sumIndexMap.get(sum));
        } else {
            sumIndexMap.set(sum, i);
        }
    }
    return maxLength;
};