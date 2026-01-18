// You are given an integer n. You need to check if the number is prime or not. Return true if it is a prime number, otherwise return false.

// A prime number is a number which has no divisors except 1 and itself.

// Optimized Approach O(sqrt(n)) Time Complexity.
class Solution {
    isPrime(n) {
  if (n <= 1) return false;
        let cnt = 0;
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                cnt++;
                if (n / i !== i) {
                    cnt++;
                }
            }
        }
        return cnt === 2;
    }
};
