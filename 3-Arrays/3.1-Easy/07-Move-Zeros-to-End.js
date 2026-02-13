// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.


//brute force approach
// Time Complexity: O(n)
// Space Complexity: O(n)

var moveZeroes = function(nums) {
    let n = nums.length;
    let temp = [];
    for (let x of nums) {
        if (x !== 0) temp.push(x);
    }
    while (temp.length < n) {
        temp.push(0);
    }
    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
};

//optimal approach using two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

var moveZeroes = function(nums) {
    let n = nums.length;
    let i = 0;
    for (let j = 0; j < n; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
};