// You are given an integer n. You need to check whether the number is a palindrome number or not. Return true if it's a palindrome number, otherwise return false.

// A palindrome number is a number which reads the same both left to right and right to left.


class Solution {
    isPalindrome(n) {
        let revnum = 0;
        let dup = n;
        while (n > 0) {
            let ld = n % 10;
            revnum = (revnum * 10) + ld;
            n = Math.floor(n / 10);
        }
      return dup === revnum;
    }
};


// Given an integer x, return true if x is a palindrome, and false otherwise.


var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let revnum = 0;
    let dup = x;
    while (x > 0) {
        let ld = x % 10;
        revnum = (revnum*10) + ld;
        x = Math.trunc(x / 10);
    }
    return dup === revnum;
};