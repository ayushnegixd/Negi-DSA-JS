// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.



//brute force approach(using sort and set)
// Time Complexity: O(n)
// Space Complexity: O(n)

var removeDuplicates = function(nums) {
   let unique = [...new Set(nums)];
   for (let i = 0; i < unique.length; i++) {
       nums[i] = unique[i];
   }
   return unique.length;
};

//optimal approach(two pointers)
// Time Complexity: O(n)
// Space Complexity: O(1)

var removeDuplicates = function(nums) {
    let n = nums.length;
    let i = 0;
    if (n === 0) return 0;
    for (let j = 1; j < n; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};