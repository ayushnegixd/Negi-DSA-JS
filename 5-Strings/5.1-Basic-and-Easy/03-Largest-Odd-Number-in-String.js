// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.


//brute force solution
// time complexity: O(n^2)
// space complexity: O(1)

function largestOddNumber(num) {
    let largest = '';   
    for (let i = 0; i < num.length; i++) {  
        for (let j = i; j < num.length; j++) {
            let sub = num.slice(i, j + 1);
            if (sub % 2 !== 0) {
                if (sub > largest) {
                    largest = sub;
                }
            }
        }
    }
    return largest;
};


// optimal solution
// time complexity: O(n)
// space complexity: O(1)

function largestOddNumber(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return '';
};