// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


// brute force solution
// time complexity: O(n^2)
// space complexity: O(1)
function isIsomorphicBrute(s, t) {
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if ((s[i] === s[j] && t[i] !== t[j]) || (s[i] !== s[j] && t[i] === t[j])) {
                return false;
            }
        }
    }
    return true;
};

// optimal solution
// time complexity: O(n)
// space complexity: O(1)
function isIsomorphicOptimal(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    let seenValues = new Set();
    for (let i = 0; i < s.length; i++) {
        let original = s[i];
        let replacement = t[i];
        if (map.has(original)) {
            if (map.get(original) !== replacement) return false;
        } else {
            if (seenValues.has(replacement)) return false;
            map.set(original, replacement);
            seenValues.add(replacement);
        }
    }
    return true;
};