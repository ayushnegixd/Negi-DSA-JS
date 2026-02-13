// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

//brute force approach(nested loops)
// Time Complexity: O(n^2)
// Space Complexity: O(n)

    var check = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let rotated = true;
        for (let j = 0; j < n; j++) {
            if (nums[(i + j) % n] > nums[(i + j + 1) % n]) {
                rotated = false;
                break;
            }
        }
        if (rotated) return true;
    }
    return false;
}

//optimal approach(two pointers)
// Time Complexity: O(n)
// Space Complexity: O(1) 

var check = function(nums) {
    let count = 0;
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        if(nums[i] < nums[i-1]) {
            count ++;
        }
    }
    if (nums[n-1] > nums[0]) {
        count ++;
    }
    return count <= 1;
};