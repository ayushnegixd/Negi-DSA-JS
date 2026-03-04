// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.


// brute force approach
// Time Complexity: O(n^3 x log(m)) where m is the number of triplets found
// Space Complexity: O(2 x m) where m is the number of triplets found

var threeSum = function(nums) {
    let result = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    result.add(triplet.toString());
                }
            }
        }
    }
    return Array.from(result).map(str => str.split(',').map(Number));
};

// better approach (using sorting and two pointers)
// Time Complexity: O(n^2 x log(m)) where m is the number of triplets found
// Space Complexity: O(n) + O(m) where m is the number of triplets found

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--; 
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;  
            }
        }
    }
    return result;
};


// optimal approach (using sorting and two pointers with early termination)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; 
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;  
            } else if (sum < 0) {
                left++; 
            } else {
                right--;
            }
        }
    }
    return result;
};