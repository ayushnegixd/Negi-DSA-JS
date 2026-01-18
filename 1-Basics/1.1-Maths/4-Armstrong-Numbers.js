// You are given an integer n. You need to check whether it is an armstrong number or not. Return true if it is an armstrong number, otherwise return false.

// An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits.


class Solution {
    isArmstrong(n) {
        let dup = n;
        let sum = 0;
        const digits = n.toString().length;
        while (n > 0) {
            let ld = n % 10;
            sum = sum + (ld ** digits);
            n = Math.floor(n / 10);
        }
       return sum === dup;
    }
};