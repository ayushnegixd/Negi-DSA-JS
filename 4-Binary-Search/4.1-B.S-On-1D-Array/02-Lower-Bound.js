// Given a sorted array of nums and an integer x, write a program to find the lower bound of x. The lower bound of x is the index of the first element in the array that is greater than or equal to x. If all elements in the array are less than x, then return the length of the array.

// time complexity: O(log n)
// space complexity: O(1)
var lowerBound = function(nums, target) {
    let n = nums.length;
    let low = 0, high = n - 1;
    let ans = n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};