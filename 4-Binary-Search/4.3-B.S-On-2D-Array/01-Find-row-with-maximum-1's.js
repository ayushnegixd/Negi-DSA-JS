// Given a non-empty grid mat consisting of only 0s and 1s, where all the rows are sorted in ascending order, find the index of the row with the maximum number of ones.
// If two rows have the same number of ones, consider the one with a smaller index. If no 1 exists in the matrix, return -1.


// brute force solution
// time complexity: O(m * n)
// space complexity: O(1)
function rowWithMaxOnesBrute(mat) {
    let maxOnes = 0;
    let rowIndex = -1;
    for (let i = 0; i < mat.length; i++) {
        let count = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                count++;
            }
        }
        if (count > maxOnes) {
            maxOnes = count;
            rowIndex = i;
        }
    }
    return rowIndex;
};

// better solution
// time complexity: O(NlogM)
// space complexity: O(1)
function rowWithMaxOnesOptimal(mat) {
    let maxOnes = 0;
    let rowIndex = -1;
    for (let i = 0; i < mat.length; i++) {
        let count = countOnes(mat[i]);
        if (count > maxOnes) {
            maxOnes = count;
            rowIndex = i;
        }
    }
    return rowIndex;
};

function countOnes(row) {
    let left = 0;
    let right = row.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (row[mid] === 1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return row.length - left;
};


// optimal solution
// time complexity: O(m + n)
// space complexity: O(1)
function rowWithMaxOnesOptimal(mat) {
    let maxOnes = 0;
    let rowIndex = -1;
    let j = mat[0].length - 1;
    for (let i = 0; i < mat.length; i++) {
        while (j >= 0 && mat[i][j] === 1) {
            j--;
        }
        const count = mat[0].length - j - 1;
        if (count > maxOnes) {
            maxOnes = count;
            rowIndex = i;
        }
    }
    return rowIndex;
};