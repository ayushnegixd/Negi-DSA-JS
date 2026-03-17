// Given a sorted array of nums and an integer x, write a program to find the upper bound of x.

// time complexity: O(log n)
// space complexity: O(1)
var upperBound = function(nums, target) {
    let n = nums.length;
    let low = 0, high = n - 1;
    let ans = n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] > target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};