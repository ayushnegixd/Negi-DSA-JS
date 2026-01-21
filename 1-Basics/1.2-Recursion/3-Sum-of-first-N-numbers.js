// Given an integer N, return the sum of first N natural numbers. Try to solve this using recursion.


class Solution {
    NnumbersSum(N) {
        if ( N == 0) {
            return 0;
        }       
        return N + this.NnumbersSum(N - 1);
    }
};