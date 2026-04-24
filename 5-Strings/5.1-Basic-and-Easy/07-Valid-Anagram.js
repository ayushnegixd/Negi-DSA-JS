// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


// brute force solution
// time complexity: O(n log n)
// space complexity: O(n)
function isAnagramBrute(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
};

// better solution
// time complexity: O(n)
// space complexity: O(n)
function isAnagramBetter(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
};

// optimal solution
// time complexity: O(n)
// space complexity: O(1)
function isAnagramOptimal(s, t) {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }
    return true;
};