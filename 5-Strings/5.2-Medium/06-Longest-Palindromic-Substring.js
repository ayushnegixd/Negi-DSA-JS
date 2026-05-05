// Given a string s, return the longest palindromic substring in s.

// brute force solution
// time complexity: O(n^3)
// space complexity: O(n)
function longestPalindromeBrute(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substring(i, j + 1);
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
};

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// better solution using expand around center
// time complexity: O(n^2)
// space complexity: O(n)
function longestPalindromeExpand(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        const oddPalindrome = expandAroundCenter(s, i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        const evenPalindrome = expandAroundCenter(s, i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;
};

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
};

// optimal solution using Manacher's Algorithm
// time complexity: O(n)
// space complexity: O(n)
function longestPalindromeOptimal(s) {
    if (s.length <= 1) return s;
    let T = "^#" + s.split("").join("#") + "#$";
    let n = T.length;
    let P = new Array(n).fill(0);
    let C = 0, R = 0;
    let maxLen = 0, centerIndex = 0;
    for (let i = 1; i < n - 1; i++) {
        let mirror = 2 * C - i;
        if (i < R) {
            P[i] = Math.min(R - i, P[mirror]);
        }
        while (T[i + (P[i] + 1)] === T[i - (P[i] + 1)]) {
            P[i]++;
        }
        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }
    const start = Math.floor((centerIndex - maxLen) / 2);
    return s.substring(start, start + maxLen);
};