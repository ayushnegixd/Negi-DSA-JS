// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// brute force approach(linear search)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var singleNumber = function(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        cnt++;
      }
    }
    if (cnt === 1) {
      return nums[i];
    }
  }
};

// better approach (hashing)
// variant A : array hashing (use if max element is small)
// Time Complexity: O(3n) to iterate through the array and find the max element.
// Space Complexity: O(max element) to store the frequency of each element.
//limit : cannot handle negative numbers and large numbers

var singleNumber = function(nums) {
  let n = nums.length;
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, nums[i]);
  }
  let freq = new Array(maxi + 1).fill(0);
  for (let i = 0; i < n; i++) {
    freq[nums[i]]++;
  }
  for (let i = 0; i <= maxi; i++) {
    if (freq[i] === 1) {
      return i;
    }
  }
};

// variant B : hash map
// Time Complexity: O(2n) to iterate through the array and find the single number.
// Space Complexity: O(n) to store the frequency of each element.

var singleNumber = function(nums) {
  let n = nums.length;
  let freq = new Map();
  for (let i = 0; i < n; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }
  for (let [key, value] of freq) {
    if (value === 1) {
      return key;
    }
  }
};

// optimal approach (XOR operation)
// Time Complexity: O(n) to iterate through the array.
// Space Complexity: O(1) no extra space used.

var singleNumber = function(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  return xor;
};