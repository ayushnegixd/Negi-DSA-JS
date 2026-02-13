// Given an integer array of size n containing distinct values in the range from 0 to n (inclusive), return the only number missing from the array within this range.

//brute force approach(linear search)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var missingNumber = function(nums) {
    let n = nums.length;
    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
};

//better approach (hashing)
// time complexity: O(2n) O(n) to iterate and mark + O(n) to iterate hash array to find missing number.
// space complexity: O(n) using an external hash array of size n + 1.

var missingNumber = function(nums) {
    let n = nums.length;
    const hash = new Array(n + 1).fill(false);
    for (let num of nums) {
        hash[num] = true;
    }
    for (let i = 0; i <= n; i++) {
        if (!hash[i]) {
            return i;
        }
    }
};

// optimal approach (mathematical formula)
// time complexity: O(n) to calculate the sum of the array.
// space complexity: O(1) no extra space used.

var missingNumber = function(nums) {
    let n = nums.length + 1; // since one number is missing, the length of the original array should be n + 1
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }
    return expectedSum - actualSum;
};

// optimal approach (XOR)
// time complexity: O(n) to iterate through the array.
// space complexity: O(1) no extra space used.

var missingNumber = function(nums) {
    let n = nums.length;
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 0; i < n; i++) {
       xor2 = xor2 ^ nums[i];
       xor1 = xor1 ^ i;
    }
    xor1 = xor1 ^ n; // XOR with n to include the last number in the range
    return xor1 ^ xor2; // XOR of xor1 and xor2 will give the missing number
};