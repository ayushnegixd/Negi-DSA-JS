// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.


// brute force solution
// time complexity: O(m * n)
// space complexity: O(1)

function searchMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

// optimal solution
// time complexity: O(log(m * n))
// space complexity: O(1)

function searchMatrix(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = 0, high = n * m - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
};