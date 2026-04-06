// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

// Return the minimized largest sum of the split.
// A subarray is a contiguous part of the array.


// brute force solution
// time complexity: O(2^n) or O(n^k) depending on the implementation
// space complexity: O(1)
function splitArrayBrute(nums, k) {
  const n = nums.length;
  function solve(idx, partitions) {
    if (partitions === 1) {
      let sum = 0;
      for (let i = idx; i < n; i++) sum += nums[i];
      return sum;
    }

    let minMaxSum = Infinity;
    let currentSum = 0;
    for (let i = idx; i <= n - partitions; i++) {
      currentSum += nums[i];
      let remainingMax = solve(i + 1, partitions - 1);
      minMaxSum = Math.min(minMaxSum, Math.max(currentSum, remainingMax));
    }
    return minMaxSum;
  }
  return solve(0, k);
}

// better approach (dynamic programming)
// time complexity: O(k * n^2)
// space complexity: O(n * k)
function splitArrayDP(nums, k) {
  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(Infinity));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      let currentSum = 0;
      for (let m = i; m >= j; m--) {
        currentSum += nums[m - 1];
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[m - 1][j - 1], currentSum));
      }
    }
  }
  return dp[n][k];
};

// optimal solution using binary search
// time complexity: O(n log(max - gap/precision))
// space complexity: O(1)

function splitArray(nums, k) {
  function countPartitions(arr, maxSum) {
      let partitions = 1;
      let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (currentSum + arr[i] <= maxSum) {
        currentSum += arr[i];
      } else {
        partitions++;
        currentSum = arr[i];
      }
    }
    return partitions;
  }
    let low = Math.max(...nums);
    let high = nums.reduce((a, b) => a + b, 0);
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let nPartitions = countPartitions(nums, mid);
      if (nPartitions <= k) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  return low;
};