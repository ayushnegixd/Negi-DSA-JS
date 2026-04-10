// Given two sorted arrays a and b of size m and n respectively. Find the kth element of the final sorted array.


// brute force solution
// time complexity: O(m + n)
// space complexity: O(m + n)
function kthElementBrute(a, b, k) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            merged.push(a[i]);
            i++;
        } else {
            merged.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        merged.push(a[i]);
        i++;
    }
    while (j < b.length) {
        merged.push(b[j]);
        j++;
    }
    return merged[k - 1];
};


// better solution
// time complexity: O(k)
// space complexity: O(1)
function kthElementBetter(a, b, k) {
    let i = 0;
    let j = 0;
    let count = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            count++;
            if (count === k) return a[i];
            i++;
        } else {
            count++;
            if (count === k) return b[j];
            j++;
        }
    }
    while (i < a.length) {
        count++;
        if (count === k) return a[i];
        i++;
    }
    while (j < b.length) {
        count++;
        if (count === k) return b[j];
        j++;
    }
};


// optimal solution using binary search
// time complexity: O(log(min(m, n)))
// space complexity: O(1)
function kthElementOptimal(a, b, k) {
    if (a.length > b.length) return kthElementOptimal(b, a, k);
    let low = Math.max(0, k - b.length);
    let high = Math.min(k, a.length);
    while (low <= high) {
        let midA = Math.floor((low + high) / 2);
        let midB = k - midA;
        let leftA = midA === 0 ? -Infinity : a[midA - 1];
        let leftB = midB === 0 ? -Infinity : b[midB - 1];
        let rightA = midA === a.length ? Infinity : a[midA];
        let rightB = midB === b.length ? Infinity : b[midB];
        if (leftA <= rightB && leftB <= rightA) {
            return Math.max(leftA, leftB);
        } else if (leftA > rightB) {
            high = midA - 1;
        } else {
            low = midA + 1;
        }
    }
    return -1; // This line should never be reached if k is valid
};