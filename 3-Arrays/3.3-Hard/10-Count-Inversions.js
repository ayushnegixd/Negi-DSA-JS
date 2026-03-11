// Given an integer array nums. Return the number of inversions in the array.
// Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
// It indicates how close an array is to being sorted.
// A sorted array has an inversion count of 0.
// An array sorted in descending order has maximum inversion.


// brute force approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var countInversions = function(nums) {
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
  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push(nums[left]);
      left++;
    } else {
      temp.push(nums[right]);
      count += (mid - left + 1);
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