// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

// brute force solution
// time complexity: O(n)
// space complexity: O(1)

function searchRange(nums, target) {
    let first = -1;
    let last = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = i;
            }
            last = i;
        }
    }
    return [first, last];
};

// optimal solution 
// time complexity: O(log n)
// space complexity: O(1)

function searchRange(nums, target) {
  const findBound = (isFirst) => {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        result = mid;
        if (isFirst) right = mid - 1;
        else left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };
  
  const start = findBound(true);
  if (start === -1) return [-1, -1];
  const end = findBound(false);
  
  return [start, end];
};