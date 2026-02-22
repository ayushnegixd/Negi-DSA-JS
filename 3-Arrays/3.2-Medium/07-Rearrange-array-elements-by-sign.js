// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should return the array of nums such that the array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.


// brute force approach
// Time Complexity: O(n) + O(n/2) = O(n)
// Space Complexity: O(n)

var rearrangeArray = function(nums) {
    let n = nums.length;
    let pos = [];
    let neg = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            pos.push(nums[i]);
        } else {
            neg.push(nums[i]);
        }
    }
    let ans = [];
    for (let i = 0; i < n / 2; i++) {
        ans.push(pos[i]);
        ans.push(neg[i]);
    }
    return ans;
};

// optimal approach(two pointer approach)
// Time Complexity: O(n)
// Space Complexity: O(n)

var rearrangeArray = function(nums) {
    let n = nums.length;
    let ans = new Array(n);
    let posIndex = 0;
    let negIndex = 1;
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            ans[posIndex] = nums[i];
            posIndex += 2;
        } else {
            ans[negIndex] = nums[i];
            negIndex += 2;
        }
    }
    return ans;
};


// optimal approach(separate and merge approach for unequal number of positive and negative integers by brute force fall back)
// Time Complexity: O(n) + O(n) = O(2n)
// Space Complexity: O(n)

var rearrangeArray = function(nums) {
    let n = nums.length;
    let pos = [];
    let neg = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            pos.push(nums[i]);
        } else {
            neg.push(nums[i]);
        }
    }
    let ans = [];
    const limit = Math.min(pos.length, neg.length);
    for (let i = 0; i < limit; i++) {
        ans.push(pos[i], neg[i]);
    }
    ans.push(...pos.slice(limit));
    ans.push(...neg.slice(limit));
    return ans;
};