// Given an array of integers nums and an integer k, return the total number of subarrays whose XOR equals to k.


// brute force approach
// Time Complexity: O(n^3)
// Space Complexity: O(1)
var countSubarrays = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let xor = 0;
            for (let m = i; m <= j; m++) {
                xor ^= nums[m];
            }
            if (xor === k) {
                count++;
            }
        }
    }
    return count;
};

// better approach (eliminating the innermost loop)
// Time Complexity: O(n^2)
// Space Complexity: O(1)
var countSubarrays = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let xor = 0;
        for (let j = i; j < nums.length; j++) {
            xor ^= nums[j];
            if (xor === k) {
                count++;
            }
        }
    }
    return count;
};

// optimal approach (using hash map)
// Time Complexity: O(n) or O(n log n) depending on the implementation of the hash map
// Space Complexity: O(n)
var countSubarrays = function(nums, k) {
    let count = 0;
    let xorMap = new Map();
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
        if (xor === k) {
            count++;
        }
        if (xorMap.has(xor ^ k)) {
            count += xorMap.get(xor ^ k);
        }
        xorMap.set(xor, (xorMap.get(xor) || 0) + 1);
    }
    return count;
};