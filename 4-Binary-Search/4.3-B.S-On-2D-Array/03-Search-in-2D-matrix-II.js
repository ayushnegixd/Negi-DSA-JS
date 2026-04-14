// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.



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

// better solution
// time complexity: O(n * log(m))
// space complexity: O(1)

function searchMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let low = 0, high = matrix[i].length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (matrix[i][mid] === target) {
                return true;
            } else if (matrix[i][mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
};

// optimal solution
// time complexity: O(m + n)
// space complexity: O(1)

function searchMatrix(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0, col = m - 1;
    while (row < n && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
};