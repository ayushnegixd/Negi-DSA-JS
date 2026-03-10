// Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.
// Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.


// brute force approach
// time complexity: O(n^2)
// space complexity: O(1)
var findErrorNums = function(nums) {
    let A, B;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count === 2) {
            A = nums[i];
        } else if (count === 0) {
            B = i + 1;
        }
    }
    return [A, B];
};

// better approach(using hash map)
// time complexity: O(2n)
// space complexity: O(n)
var findErrorNums = function(nums) {
    let A, B;
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            A = nums[i];
        } else {
            map[nums[i]] = true;
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!map[i]) {
            B = i;
            break;
        }
    }
    return [A, B];
};

// optimal approach(using math)
// time complexity: O(n)
// space complexity: O(1)
var findErrorNums = function(nums) {
    let n = nums.length;
    let SN = n * (n + 1) / 2;
    let S2N = n * (n + 1) * (2 * n + 1) / 6;
    let S = 0, S2 = 0;
    for (let i = 0; i < n; i++) {
        S += nums[i];
        S2 += nums[i] * nums[i];
    }
    let val1 = S - SN;
    let val2 = S2 - S2N;
    val2 = val2 / val1;
    let x = (val1 + val2) / 2;
    let y = x - val1;
    return [x, y];
};