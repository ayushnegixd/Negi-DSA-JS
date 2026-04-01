// Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

// Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).


// brute force solution
// time complexity: O(n * m), where m is the maximum element in the array
// space complexity: O(1)
function smallestDivisor(nums, threshold) {
    let divisor = 1;
    while (true) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += Math.ceil(nums[i] / divisor);
        }
        if (sum <= threshold) {
            return divisor;
        }
        divisor++;
    }
};

// optimal solution
// time complexity: O(n log m), where m is the maximum element in the array
// space complexity: O(1)

function smallestDivisor(nums, threshold) {
    function sumbyD(arr, div) {
        let sum = 0;
        let n = arr.length;
        for (let i = 0; i < n; i ++) {
            sum += Math.ceil(arr[i] / div);
        }
        return sum;
    }
    let low = 1;
    let high = Math.max(...nums);
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (sumbyD(nums, mid) <= threshold) {
            high = mid - 1;
        } 
        else low = mid + 1;
    }
    return low;
};