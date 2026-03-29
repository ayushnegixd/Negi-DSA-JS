// Given two numbers N and M, find the Nth root of M. The Nth root of a number M is defined as a number X such that when X is raised to the power of N, it equals M. If the Nth root is not an integer, return -1.

// brute force solution
// time complexity: O(M^(1/N))
// space complexity: O(1)

function nthRoot(N, M) {
    let i = 1;
    while (Math.pow(i, N) <= M) {
        i++;
    }
    return Math.pow(i - 1, N) === M ? i - 1 : -1;
};

// optimal solution
// time complexity: O(log N * log M)
// space complexity: O(1)

function nthRoot(N, M) {
    if (M === 0 || M === 1) return M;
    let low = 1;
    let high = M;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = Math.pow(mid, N);
        if (val === M) {
            return mid;
        }
        else if (val < M) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
};