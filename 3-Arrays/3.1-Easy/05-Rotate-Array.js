// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

//brute force approach
// Time Complexity: O(n*k)
// Space Complexity: O(1)

var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // In case k is greater than n
    for (let i = 0; i < k; i++) {
        let last = nums[n - 1];
        for (let j = n - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = last;
    }
};

//optimal approach using reverse
// Time Complexity: O(n)
// Space Complexity: O(1)

var rotate = function(nums, k) {
    let n = nums.length;
    if (n <= 1) return;
    k = k % n;
    if (k === 0) return;
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};