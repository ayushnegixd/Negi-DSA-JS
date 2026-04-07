// You are given A painters and an array C of N integers where C[i] denotes the length of the ith board. Each painter takes B units of time to paint 1 unit of board. You must assign boards to painters such that:

// Each painter paints only contiguous segments of boards.
// No board can be split between painters.
// The goal is to minimize the time to paint all boards.
// Return the minimum time required to paint all boards modulo 10000003.


// brute force solution
// time complexity: O(n * (sum - max))
// space complexity: O(1)
function paint(A, B, C) {
    function countPainters(maxLength) {
        let painters = 1, currentLength = 0;
        for (let i = 0; i < C.length; i++) {
            if (currentLength + C[i] > maxLength) {
                painters++;
                currentLength = C[i];
            } else {
                currentLength += C[i];
            }
        }
        return painters;
    }

    const maxBoard = Math.max(...C);
    const totalLength = C.reduce((sum, len) => sum + len, 0);
    for (let time = maxBoard; time <= totalLength; time++) {
        if (countPainters(time) <= A) {
            return (time * B) % 10000003;
        }
    }
};

// optimal solution
// time complexity: O(n log (sum - max))
// space complexity: O(1)
function paint(A, B, C) {
    function countPainters(maxLength) {
        let painters = 1;
        let currentLength = 0n; // Use BigInt for lengths too
        for (let i = 0; i < C.length; i++) {
            let boardLen = BigInt(C[i]);
            if (currentLength + boardLen > maxLength) {
                painters++;
                currentLength = boardLen;
            } else {
                currentLength += boardLen;
            }
        }
        return painters;
    }

    let low = BigInt(Math.max(...C));
    let high = C.reduce((sum, length) => sum + BigInt(length), 0n);
    while (low < high) {
        const mid = (low + high) / 2n;
        if (countPainters(mid) > A) {
            low = mid + 1n;
        } else {
            high = mid;
        }
    }
    return Number((low * BigInt(B)) % 10000003n);
}