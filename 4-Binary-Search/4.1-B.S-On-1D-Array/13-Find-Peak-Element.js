// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.


// brute force solution
// time complexity: O(n)
// space complexity: O(1)

function findPeakElement(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if ((i === 0 || nums[i] > nums[i - 1]) &&
            (i === n - 1 || nums[i] > nums[i + 1])) {
            return i;
        }
    }
    return -1;
};

// optimal solution
// time complexity: O(log n)
// space complexity: O(1)

function findPeakElement(nums) {
    let n = nums.length;
    if (n === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[n - 1] > nums[n - 2]) return n - 1;
    let low = 1;
    let high = n - 2;
    while (low <= high) {
        let mid = (low + high) >>> 1;
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        }
        if (nums[mid] > nums[mid - 1]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
};