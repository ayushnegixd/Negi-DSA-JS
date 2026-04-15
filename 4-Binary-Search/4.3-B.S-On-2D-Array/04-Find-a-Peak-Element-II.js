// A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

// Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].
// You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.
// You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.



// brute force solution
// time complexity: O(m * n)
// space complexity: O(1)

function findPeakGrid(mat) {
    let m = mat.length;
    let n = mat[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 || mat[i][j] > mat[i - 1][j]) &&
                (i === m - 1 || mat[i][j] > mat[i + 1][j]) &&
                (j === 0 || mat[i][j] > mat[i][j - 1]) &&
                (j === n - 1 || mat[i][j] > mat[i][j + 1])) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

// optimal solution
// time complexity: O(n*log(m))
// space complexity: O(1)
function findPeakGridOptimal(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let low = 0, high = m - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let maxColIndex = 0;
        for (let j = 1; j < n; j++) {
            if (mat[mid][j] > mat[mid][maxColIndex]) {
                maxColIndex = j;
            }
        }
        if ((mid === 0 || mat[mid][maxColIndex] > mat[mid - 1][maxColIndex]) &&
            (mid === m - 1 || mat[mid][maxColIndex] > mat[mid + 1][maxColIndex])) {
            return [mid, maxColIndex];
        }
        if (mid > 0 && mat[mid - 1][maxColIndex] > mat[mid][maxColIndex]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [-1, -1];  
};