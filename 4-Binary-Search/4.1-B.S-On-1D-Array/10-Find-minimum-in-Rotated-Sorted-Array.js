// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.


// brute force solution
// time complexity: O(n)
// space complexity: O(1)

function findMin(nums) {
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
};

// optimal solution
// time complexity: O(log n)
// space complexity: O(1)

function findMin(nums) {
    let low = 0;
    let high = nums.length - 1;
    let ans = -Infinity;

    while (low < high) {
        let mid = (low + high) >>> 1;
        if (nums[low] <= nums[high]) {
            ans = Math.min(ans, nums[low]);
            break;
        }
        if (nums[low] <= nums[mid]) {
            ans = Math.min(ans, nums[low]);
            low = mid + 1;
        } else {
            ans = Math.min(ans, nums[mid]);
            high = mid;
        }
    }    
    return ans; 
};