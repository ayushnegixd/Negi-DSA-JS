// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// brute force approach
// Time Complexity: O(N^2)
// Space Complexity: O(1)

var longestConsecutive = function(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    let longest = 1;
    for (let i = 0; i < n; i++) {
        let count = 1;
        let currentNum = nums[i];
        while (nums.includes(currentNum + 1)) {
            count++;
            currentNum++;
        }
        longest = Math.max(longest, count);
    }
    return longest;
};

// better approach (sorting)
// Time Complexity: O(nlogn)
// Space Complexity: O(1)

var longestConsecutive = function(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    let longest = 1;
    let count = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        } else if (nums[i] === nums[i - 1] + 1) {
            count++;
        } else {
            longest = Math.max(longest, count);
            count = 1;
        }
    }
    longest = Math.max(longest, count);
    return longest;
};

// optimal approach (hash set)
// Time Complexity: O(n)
// Space Complexity: O(n)

var longestConsecutive = function(nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    let numSet = new Set(nums);
    let longest = 1;
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let count = 1;
            while (numSet.has(currentNum + 1)) {
                count++;
                currentNum++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
};