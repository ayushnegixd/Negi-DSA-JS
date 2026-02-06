// Given an array of integers nums, return the value of the largest element in the array

//brute force approach
// Time Complexity: O(n^2)
// Space Complexity: O(1) or O(n) depending on the implementation

function largestElement(nums) {
    nums.sort((a, b) => b - a);
    return nums[nums.length - 1];
}

//optimal approach
// Time Complexity: O(n)
// Space Complexity: O(1)
function largestElement(nums) {
    if (nums.length === 0) {
        throw new Error("Array is empty");
    }
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
};