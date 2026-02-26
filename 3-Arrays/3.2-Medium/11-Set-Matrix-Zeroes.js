// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.


// brute force approach
// Time Complexity: O((n*m)*(n+m)) = O(n^2*m + n*m^2) = O(n^3)
// Space Complexity: O(1)

var setZeroesBrute = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < m; k++) {
                    if (matrix[k][j] !== 0) {
                        matrix[k][j] = 'temp';
                    }
                }
                for (let k = 0; k < n; k++) {
                    if (matrix[i][k] !== 0) {
                        matrix[i][k] = 'temp';
                    }
                }
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 'temp') {    
                matrix[i][j] = 0;
            }
        }
    }
};

// better approach 
// Time Complexity: O(2*n*m) = O(n*m)
// Space Complexity: O(n+m)

var setZeroesBetter = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let rows = new Set();
    let cols = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (let row of rows) {
        for (let j = 0; j < n; j++) {
            matrix[row][j] = 0;
        }
    }
    for (let col of cols) {
        for (let i = 0; i < m; i++) {
            matrix[i][col] = 0;
        }
    }
};

// optimal approach
// Time Complexity: O(n*m)
// Space Complexity: O(1)

var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let col0 = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] !== 0) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
            matrix[i][j] = 0;
          }
        }
      }
    }
    if (matrix[0][0] === 0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};