// Given an integer array nums of size n, sorted in ascending order with distinct values. The array has been right rotated an unknown number of times, between 0 and n-1 (including). Determine the number of rotations performed on the array.


// brute force solution
// time complexity: O(n)
// space complexity: O(1)

function countRotations(nums) {
  let min = Infinity;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      index = i;
    }
  }
  return index;
};

// optimal solution
// time complexity: O(log n)
// space complexity: O(1)

function countRotations(nums) {
  let low = 0;
  let high = nums.length - 1;
  let ans = Infinity;
  let index = 0;

  while (low <= high) {
    let mid = (low + high) >>> 1;
    if (nums[low] <= nums[high]) {
      if (nums[low] < ans) {
        ans = nums[low];
        index = low;
      }
      break;
    }
    if (nums[low] <= nums[mid]) {
      if (nums[low] < ans) {
        ans = nums[low];
        index = low;
      }
      low = mid + 1;
    } else {
      if (nums[mid] < ans) {
        ans = nums[mid];
        index = mid;
      }
      high = mid - 1;
    }
  }    
  return index; 
};