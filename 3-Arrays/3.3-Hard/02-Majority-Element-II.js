// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// brute force approach
// Time Complexity: O(N^2)
// Space Complexity: O(1)

var majorityElement = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count > Math.floor(nums.length / 3) && !result.includes(nums[i])) {
            result.push(nums[i]);
        }
    }
    return result;
};

// better approach (using hash map)
// Time Complexity: O(n)
// Space Complexity: O(n)

var majorityElement = function(nums) {
    let countMap = {};
    let result = [];
    for (let num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    for (let key in countMap) {
        if (countMap[key] > Math.floor(nums.length / 3)) {
            result.push(parseInt(key));
        }
    }
    return result;
};

// optimal approach (Boyer-Moore Voting Algorithm)
// Time Complexity: O(n)
// Space Complexity: O(1)

var majorityElement = function(nums) {
    let candidate1 = null, candidate2 = null, count1 = 0, count2 = 0;
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }  
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }
    
    let result = [];
    if (count1 > Math.floor(nums.length / 3)) {
        result.push(candidate1);
    }
    if (count2 > Math.floor(nums.length / 3)) {
        result.push(candidate2);
    }
    return result;
};