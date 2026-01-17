// You are given an integer n. Return the integer formed by placing the digits of n in reverse order.

class Solution {
    reverseNumber(n) {
        let revnum = 0;
        while (n > 0) {
            let ld = n % 10;
            revnum = (revnum * 10) + ld;
            n = Math.floor(n / 10);
        }
        return revnum;
    }
}


// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


var reverse = function(x) {
        let isNegative = x < 0;
        x = Math.abs(x);
        let revnum = 0;
        while (x> 0) {
            let ld = x % 10;
            revnum = (revnum * 10) + ld;
            x = Math.floor(x / 10);
        }
        if (revnum > 2 ** 31 - 1) return 0;
        return isNegative ? -revnum : revnum;
    };
