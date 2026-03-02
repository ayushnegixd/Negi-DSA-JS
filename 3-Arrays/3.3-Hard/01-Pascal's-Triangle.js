// Given an integer numRows, return the first numRows of Pascal's triangle.

// brute force approach
// Time Complexity: O(N^3)
// Space Complexity: O(N^2)

var generate = function(numRows) {
    let triangle = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                let sum = 0;
                for (let k = 0; k < triangle[i - 1].length; k++) {
                    sum += triangle[i - 1][k];
                }
                row.push(sum);
            }
        }
        triangle.push(row);
    }
    return triangle;
};

// optimal approach
// Time Complexity: O(N^2)
// Space Complexity: O(N^2)

var generate = function(numRows) {
    let triangle = [];
    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    return triangle;
};