// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
// Return the single element that appears only once.


// brute force solution
// time complexity: O(n)
// space complexity: O(1)

function singleNonDuplicate(nums) {
     let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    return xor;
};

// optimal solution
// time complexity: O(log n)
// space complexity: O(1)

function singleNonDuplicate(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];
    if (nums[0] !== nums[1]) return nums[0];
    if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];
    let low = 1;
    let high = n -2;
    while (low <= high) {
        let mid = (low + high) >>> 1;
        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
            return nums[mid];
        }
        if ((mid % 2 === 1 && nums[mid] === nums[mid - 1]) || 
            (mid % 2 === 0 && nums[mid] === nums[mid + 1])) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
};  