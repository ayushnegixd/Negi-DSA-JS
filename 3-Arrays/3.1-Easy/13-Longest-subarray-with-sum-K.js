// Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.

// brute force approach (linear search)
// Time Complexity: O(n^3) to iterate through all sub-arrays and calculate their sum.
// Space Complexity: O(1)

var longestSubarray = function(nums, k) {
  let n = nums.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let m = i; m <= j; m++) {
        sum += nums[m];
      }
      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
};

// optimized brute force approach (prefix sum)
// Time Complexity: O(n^2) to iterate through all sub-arrays and calculate their sum using prefix sum.
// Space Complexity: O(1) to store the prefix sum.

var longestSubarray = function(nums, k) {
  let n = nums.length;
  let maxLen = 0;
  let prefixSum = new Array(n).fill(0);
  prefixSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = prefixSum[j] - (i > 0 ? prefixSum[i - 1] : 0);
      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
};

// better approach (hashing)
// Time Complexity: O(n) to iterate through the array and find the longest sub-array with sum k.
// Space Complexity: O(n) to store the prefix sum and its index in the hash map.

var longestSubarray = function(nums, k) {
  let n = nums.length;
  let maxLen = 0;
  let prefixSum = 0;
  let hashMap = new Map();
  for (let i = 0; i < n; i++) {
    prefixSum += nums[i];
    if (prefixSum === k) {
      maxLen = Math.max(maxLen, i + 1);
      let rem = prefixSum - k;
      if (hashMap.has(rem)) {
        maxLen = Math.max(maxLen, i - hashMap.get(rem));
      }
    }
    if (!hashMap.has(prefixSum)) {
      hashMap.set(prefixSum, i);
    }
  }
  return maxLen;
};

// optimal approach (two pointers)
// Time Complexity: O(n) to iterate through the array and find the longest sub-array with sum k.
// Space Complexity: O(1) to store the two pointers and the current sum.

var longestSubarray = function(nums, k) {
  let n = nums.length;
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let currentSum = 0;
  while (right < n) {
    currentSum += nums[right];
    while (currentSum > k && left <= right) {
      currentSum -= nums[left];
      left++;
    }
    if (currentSum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
  }
  return maxLen;
};