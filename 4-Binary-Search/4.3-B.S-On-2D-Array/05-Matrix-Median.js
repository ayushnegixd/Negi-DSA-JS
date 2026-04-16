// Given a 2D array matrix that is row-wise sorted. The task is to find the median of the given matrix.

// brute force solution
// time complexity: O(n * m * log(n * m))
// space complexity: O(n * m)

function findMedian(matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
        }
    }
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
};

// better solution
// time complexity: O(n * m * log(n * m))
// space complexity: O(n * m)

function findMedian(matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr.push(...matrix[i]);
    }
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
};

// optimal solution
// time complexity: O(log(10^9) * Nlog(m))
// space complexity: O(1)
function upperBound(row, x) {
    let low = 0, high = row.length - 1;
    let ans = row.length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (row[mid] > x) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function countSmallEqual(matrix, mid) {
    let cnt = 0;
    for (let i = 0; i < matrix.length; i++) {
        cnt += upperBound(matrix[i], mid);
    }
    return cnt;
}
  
function findMedian(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = 1, high = 1e9;
    let required = Math.floor((n * m) / 2);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (countSmallEqual(matrix, mid) <= required) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}