// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.


// brute force solution
// time complexity: O(n^2)
// space complexity: O(1)
function rotateStringBrute(s, goal) {
    if (s.length !== goal.length) return false;
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        if (s === goal) return true;
    }
    return false;
};

// optimal solution
// time complexity: O(n)
// space complexity: O(1)
function rotateStringOptimal(s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
};