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
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = mid * mid;
        if (val <= n) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return high;
};