// Given an m x n matrix, return all elements of the matrix in spiral order.

// optimal approach
// Time Complexity: O(n*m)
// Space Complexity: O(n*m) or O(1) if we don't count the output array.

var spiralOrder = function(matrix) {
    let result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        //left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        //top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            //right to left
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            //bottom to top
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
};