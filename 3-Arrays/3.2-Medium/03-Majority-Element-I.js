// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


//brute force approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var majorityElement = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count > Math.floor(n / 2)) {
            return nums[i];
        }
    }
};

// better approach (hash map)
// Time Complexity: O(n) or O(n log n) depending on the implementation of the hash map
// Space Complexity: O(n)

var majorityElement = function(nums) {
    let n = nums.length;
    let hashMap = new Map();
    for (let i = 0; i < n; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
        if (hashMap.get(nums[i]) > Math.floor(n / 2)) {
            return nums[i];
        }
    }
};

// optimal approach (Boyer-Moore Voting Algorithm)
// Time Complexity: O(n)
// Space Complexity: O(1)

var majorityElement = function(nums) {
    let n = nums.length;
    let count = 0;
    let candidate = null;
    for (let i = 0; i < n; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
};