// Given an integer n, write a function to print all numbers from 1 to n (inclusive) using recursion.

// You must not use any loops such as for, while, or do-while.
// The function should print each number on a separate line, in increasing order from 1 to n.


class Solution {
    printNumbers(n) {
       if (n < 1) {
        return;
       }
       this.printNumbers(n-1);
       console.log(n);
    }
};