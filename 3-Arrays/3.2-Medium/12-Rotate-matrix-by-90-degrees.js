// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// brute force approach(using extra space
// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

var rotateBrute = function(matrix) {
    let n = matrix.length;
    let rotated = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - 1 - i] = matrix[i][j];
        }
    }
    return rotated;
};

// optimaal approach (in place)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var rotateOptimal = function(matrix) {
    let n = matrix.length;
    // transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
};