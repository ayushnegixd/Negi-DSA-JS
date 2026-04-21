// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


// brute force solution
// time complexity: O(n * m) where n is the number of strings and m is the length of the longest string
// space complexity: O(1)

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};


// optimal solution
// time complexity: O(N * MlogN) where N is the number of strings and M is the length of the longest string
// space complexity: O(1)

function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    return first.slice(0, i);
};