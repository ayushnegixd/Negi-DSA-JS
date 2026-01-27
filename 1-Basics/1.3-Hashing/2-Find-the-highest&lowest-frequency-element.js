// Given an array nums of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times. If there are multiple elements that appear a maximum number of times, find the smallest of them.


class Solution {
    mostFrequentElement(nums) {
        const countmap = new Map();
        for (let num of nums) {
            countmap.set(num, (countmap.get(num) || 0) + 1);
        }
        let maxfreq = 0;
        let result = -1;
        for (let [num, count] of countmap) {
            if (count > maxfreq) {
                maxfreq = count;
                result = num;
            }
            else if ( count === maxfreq) {
                if (num < result) {
                    result = num;
                }
            }
        }
        return result;
    }
};


// The frequency of an element is the number of times it occurs in an array.
// You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.
// Return the maximum possible frequency of an element after performing at most k operations.


 var maxFrequency = function(nums, k) {
    // 1. Sort the array numerically (Small to Big)
    nums.sort((a, b) => a - b);
    
    let left = 0;
    let currSum = 0;
    let maxFreq = 0;

    // 2. Expand window with 'right'
    for (let right = 0; right < nums.length; right++) {
        let target = nums[right];
        currSum += target; // Add new number to window sum
        // 3. Check if window is valid
        // Logic: (target * length of window) - currSum > k
        while ((target * (right - left + 1)) - currSum > k) {
            // Window is too expensive! Shrink from left.
            currSum -= nums[left];
            left++;
        }
        // 4. Update maxFreq
        // The size of the valid window is the frequency we can achieve
        maxFreq = Math.max(maxFreq, (right - left + 1));
    }
    return maxFreq;
};