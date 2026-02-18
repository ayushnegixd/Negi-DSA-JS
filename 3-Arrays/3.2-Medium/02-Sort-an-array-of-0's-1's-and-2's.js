// Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order.
// The sorting must be done in-place, without making a copy of the original array..


// brute force (merge sort)
// time complexity: O(nlogn)
// space complexity: O(n)

var sortColors = function(nums) {
  if (nums.length <= 1) return;
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  sortColors(left);
  sortColors(right);
  let i = 0, j = 0, k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      nums[k++] = left[i++];
    } else {
      nums[k++] = right[j++];
    }
  }
  while (i < left.length) {
    nums[k++] = left[i++];
  }
  while (j < right.length) {
    nums[k++] = right[j++];
  }
};

// better approach (counting sort)
// time complexity: O(2n)
// space complexity: O(1)

var sortColors = function(nums) {
  let count0 = 0, count1 = 0, count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count0++;
    else if (nums[i] === 1) count1++;
    else count2++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < count0) nums[i] = 0;
    else if (i < count0 + count1) nums[i] = 1;
    else nums[i] = 2;
  }
};

// optimal approach (Dutch National Flag algorithm)
// time complexity: O(n)
// space complexity: O(1)

var sortColors = function(nums) {
  let low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};