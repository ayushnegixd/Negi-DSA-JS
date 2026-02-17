// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


//brute force approach(using nested loops)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};


//better approach (using hash map) (optimal for indices)
// Time Complexity: O(n)
// Space Complexity: O(n)

var twoSum = function(nums, target) {
    let n = nums.length;
    let hashMap = new Map();
    for (let i = 0; i < n; i++) {
        let rem = target - nums[i];
        if (hashMap.has(rem)) {
            return [hashMap.get(rem), i];
        }
        hashMap.set(nums[i], i);
    }
};

// optimal approach (two pointers) (optimal for yes/no or sorted array)
// Time Complexity: O(n log n)
// Space Complexity: O(1)

var twoSum = function(nums, target) {
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return true; // or return [left, right] if indices are needed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};