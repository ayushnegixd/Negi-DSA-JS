// Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.


//brute force approach
// Time Complexity: O(n*k)
// Space Complexity: O(1)

var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // In case k is greater than n
    for (let i = 0; i < k; i++) {
        let first = nums[0];
        for (let j = 0; j < n - 1; j++) {
            nums[j] = nums[j + 1];
        }
        nums[n - 1] = first;
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
    reverse(nums, 0, n - k - 1);
    reverse(nums, n - k, n - 1);
};