// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.


// brute force solution
// time complexity: O(maxElement + k)
// space complexity: O(1)
function findKthPositive(arr, k) {
    let missingCount = 0;
    let currentNum = 1;
    while (missingCount < k) {
        if (!arr.includes(currentNum)) {
            missingCount++;
        }
        if (missingCount === k) break;
        currentNum++;
    }
    return currentNum;
};


// better approach
// time complexity: O(n)
// space complexity: O(1)
function findKthPositive(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k) {
            k++;
        } else {
            break;
        }
    }
    return k;
};


// optimal solution using binary search
// time complexity: O(log n)
// space complexity: O(1)
function findKthPositive(arr, k) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let missingCount = arr[mid] - (mid + 1);
        if (missingCount < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low + k;
};