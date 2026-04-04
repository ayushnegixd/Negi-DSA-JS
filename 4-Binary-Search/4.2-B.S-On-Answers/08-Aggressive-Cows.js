// Given an array nums of size n, which denotes the positions of stalls, and an integer k, which denotes the number of aggressive cows, assign stalls to k cows such that the minimum distance between any two cows is the maximum possible. Find the maximum possible minimum distance.


// brute force solution
// time complexity: O(NlogN) + O(N*(max - min))
// space complexity: O(1)
function aggressiveCows(nums, k) {
    nums.sort((a, b) => a - b);
    let limit = nums[nums.length - 1] - nums[0];
    for (let i = 1; i <= limit; i++) {
        if (!isFeasible(nums, k, i)) {
            return i - 1;
        }
    }
    return limit;
}

function isFeasible(nums, k, distance) {
    let count = 1;
    let lastPosition = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - lastPosition >= distance) {
            count++;
            lastPosition = nums[i];
            if (count === k) {
                return true;
            }
        }    
    }
    return false;
}


// optimal solution using binary search
// time complexity: O(NlogN) + O(log(max - min) * N)
// space complexity: O(1)
function canPlaceCows(stalls, k, dist) {
    let countCows = 1;
    let lastPos = stalls[0];
    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - lastPos >= dist) {
            countCows++;
            lastPos = stalls[i];
            if (countCows >= k) return true;
        }
    return false;
}

function aggressiveCows(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let low = 1;
    let high = nums[nums.length - 1] - nums[0];
    let ans = 0;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (this.canPlaceCows(nums, k, mid)) {
            ans = mid;
            low = mid + 1;
        } else high = mid - 1;
    }
    return ans;
  }
};