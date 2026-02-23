// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.


//brute force approach
// Time Complexity: O(n!*n)
// Space Complexity: O(n!)

var nextPermutation = function(nums) {
    let n = nums.length;
    let permutations = [];
    let used = new Array(n).fill(false);
    function backtrack(path) {
        if (path.length === n) {
            permutations.push([...path]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    permutations.sort((a, b) => {
        for (let i = 0; i < n; i++) {
            if (a[i] !== b[i]) {
                return a[i] - b[i];
            }
        }
        return 0;
    });
    for (let i = 0; i < permutations.length; i++) {
        if (permutations[i].join('') === nums.join('')) {
            if (i === permutations.length - 1) {
                return permutations[0];
            } else {
                return permutations[i + 1];
            }
        }
    }
};

// optimal approach
// Time Complexity: O(3n) = O(n)
// Space Complexity: O(1) or O(n) depending on the implementation of reverse function

var nextPermutation = function(nums) {
    let n = nums.length;
    let ind = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            ind = i;
            break;
        }
    }
    if (ind === -1) {
        reverse(nums, 0, n - 1);
        return;
    }
    for (let i = n - 1; i > ind; i--) {
        if (nums[i] > nums[ind]) {
            [nums[i], nums[ind]] = [nums[ind], nums[i]];
            break;
        }
    }
    reverse(nums, ind + 1, n - 1);
};

// helper function to swap two elements in the array
function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};