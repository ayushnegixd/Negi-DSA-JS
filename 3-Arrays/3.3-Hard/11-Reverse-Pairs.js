// Given an integer array nums, return the number of reverse pairs in the array.
// A reverse pair is a pair (i, j) where:
// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].

//brute force approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var reversePairs = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > 2 * nums[j]) {
                count++;
            }
        }
    }
    return count;
};

// optimized approach using merge sort
// Time Complexity: O(n log n)
// Space Complexity: O(n)

var reversePairs = function(nums) {
    return mergeSortandCount(nums, 0, nums.length - 1);
};

function mergeSortandCount(nums, low, high) {
    if (low >= high) return 0;
    let mid = Math.floor((low + high) / 2);
    let count = 0;
    count += mergeSortandCount(nums, low, mid);
    count += mergeSortandCount(nums, mid + 1, high);
    count += mergeAndCount(nums, low, mid, high);
    return count;
}

function mergeAndCount(nums, low, mid, high) {
  let temp = [];
  let left = low, right = mid + 1, count = 0;
  for (let i = low; i <= mid; i++) {
    for (let j = mid + 1; j <= high; j++) {
      if (nums[i] > 2 * nums[j]) {
        count++;
      }
    }
  }
  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push(nums[left]);
      left++;
    } else {
      temp.push(nums[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }
  while (right <= high) {
    temp.push(nums[right]);
    right++;
  }
  for (let i = 0; i < temp.length; i++) {
    nums[low + i] = temp[i];
  }
  return count;
};