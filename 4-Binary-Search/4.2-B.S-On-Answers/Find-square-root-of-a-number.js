// Given a positive integer n. Find and return its square root. If n is not a perfect square, then return the floor value of sqrt(n).

// brute force solution
// time complexity: O(sqrt(n))
// space complexity: O(1)

function floorSqrt(n) {
    let i = 1;
    while (i * i <= n) {
        i++;
    }
    return i - 1;
};

// optimal solution
// time complexity: O(log n)
// space complexity: O(1)

function floorSqrt(n) {
    if (n === 0 || n === 1) return n;
    let low = 1;
    let high = n;
    let ans = 0;
    while (low <= high) {
        let mid = (low + high) >>> 1;
        if (mid * mid === n) {
            return mid;
        }
        if (mid * mid < n) {
            low = mid + 1;
            ans = mid;
        }
        else {
            high = mid - 1;
        }
    }
    return ans;
};