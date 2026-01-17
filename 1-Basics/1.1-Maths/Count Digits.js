// You are given an integer n. You need to return the number of digits in the number.

// The number will have no leading zeroes, except when the number is 0 itself.


class Solution {
    countDigit(n) {
        if (n === 0) return 1;
        let cnt = 0;
        n = Math.abs(n);
        while (n > 0) {
            let lastdigit = n % 10;
            cnt = cnt + 1;
            n = Math.floor(n / 10);
        }
        return cnt;
    }
}