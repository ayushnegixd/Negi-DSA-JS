// Given an integer n, write a function to print all numbers from n to 1 (inclusive) using recursion.

// You must not use any loops such as for, while, or do-while.
// The function should print each number on a separate line, in decreasing order from n to 1


class Solution {
    printNumbers(n) {
        if (n < 1) {
            return;
        }
        console.log(n);

        this.printNumbers(n-1);
    }
}