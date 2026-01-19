// You are given two integers n1 and n2. You need find the Greatest Common Divisor (GCD) of the two given numbers. Return the GCD of the two numbers.

// The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of the integers.


// --- STANDARD APPROACH (Brute Force) ---
        // Time Complexity: O(min(n1, n2))
    class Solution {
        GCD(n1, n2) {
        let gcd = 1;
        for (let i = 1; i <= Math.min(n1, n2); i++) {
            if (n1 % i === 0 && n2 % i === 0) {
                gcd = i;
            }
        }
        return gcd;
      }
    };


    // --- OPTIMIZED APPROACH (Euclidean Algorithm)
        // Time Complexity: O(log(min(n1, n2)))

        class Solution {
    GCD(n1, n2) {
        while(n1 > 0 && n2 > 0) {
            if (n1 > n2) n1 = n1 % n2;
            else n2 = n2 % n1;
        }
        return n1 === 0 ? n2 : n1;
    }
};