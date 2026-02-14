// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Optimal approach 
// time complexity: O(n) to iterate through the array.
// space complexity: O(1) no extra space used.

var findMaxConsecutiveOnes = function(nums) {
  let maxi = 0;
  let cnt = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      cnt++;
      maxi = Math.max(maxi, cnt);
    } else {
      cnt = 0;
    }
  }
  return maxi;
};