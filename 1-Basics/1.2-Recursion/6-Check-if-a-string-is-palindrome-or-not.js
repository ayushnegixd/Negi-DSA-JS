// Given a string s, return true if the string is palindrome, otherwise false.

// A string is called palindrome if it reads the same forward and backward.

class Solution {
    palindromeCheck(s, i =0) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (i >= s.length/ 2) {
            return true;
        }
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
        return this.palindromeCheck(s, i+1);
    }
};

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


var isPalindrome = function(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    // reverse() takes no arguments
    let reversed = cleaned.split("").reverse().join(""); 
    return reversed === cleaned;
};