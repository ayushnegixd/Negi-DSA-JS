// Given an integer array nums, return a list of all the leaders in the array.

// A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.


// brute force approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var findLeaders = function(nums) {
    let ans = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let isLeader = true;
        for (let j = i + 1; j < n; j++) {
            if (nums[i] <= nums[j]) {
                isLeader = false;
                break;
            }
        }
        if (isLeader) {
            ans.push(nums[i]);
        }
    }
    return ans;
};

// optimal approach (backward traversal)
// Time Complexity: O(n)
// Space Complexity: O(1)

var findLeaders = function(nums) {
    let ans = [];
    let maxi = -Infinity;
    let n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > maxi) {
            ans.push(nums[i]);
            maxi = nums[i];
        }
    }
    return ans.reverse();
};