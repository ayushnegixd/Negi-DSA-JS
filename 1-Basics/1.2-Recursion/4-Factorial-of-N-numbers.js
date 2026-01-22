// You are given an integer n. Return the value of n! or n factorial.
// Factorial of a number is the product of all positive integers less than or equal to that number.


class Solution {
    factorial(n) {
        if (n == 0) {
            return 1;
        }
        return n * this.factorial(n-1);
    }
};