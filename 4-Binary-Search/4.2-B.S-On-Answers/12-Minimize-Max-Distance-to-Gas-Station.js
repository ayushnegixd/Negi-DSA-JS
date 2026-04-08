// Given a sorted array arr of size n, containing integer positions of n gas stations on the X-axis, and an integer k, place k new gas stations on the X-axis.

// The new gas stations can be placed anywhere on the non-negative side of the X-axis, including non-integer positions.
// Let dist be the maximum distance between adjacent gas stations after adding the k new gas stations.
// Find the minimum value of dist.
// Your answer will be accepted if it is within 1e-6 of the true value.


// brute force solution
// time complexity: O(k * n)
// space complexity: O(n)
function minmaxGasDistBrute(arr, k) {
    const n = arr.length;
    const howMany = new Array(n - 1).fill(0);
    for (let i = 0; i < k; i++) {
        let maxSection = -1;
        let maxIdx = -1;
        for (let j = 0; j < n - 1; j++) {
            let diff = arr[j + 1] - arr[j];
            let sectionLength = diff / (howMany[j] + 1);
            if (sectionLength > maxSection) {
                maxSection = sectionLength;
                maxIdx = j;
            }
        }
        howMany[maxIdx]++;
    }
    let maxAns = -1;
    for (let i = 0; i < n - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        let sectionLength = diff / (howMany[i] + 1);
        maxAns = Math.max(maxAns, sectionLength);
    }
    return maxAns;
}

// better solution
// time complexity: O(n log(n) + k log(n))
// space complexity: O(n)
function minmaxGasDistBetter(arr, k) {
    const n = arr.length;
    const howMany = new Array(n - 1).fill(0);
    const pq = new MaxPriorityQueue({ priority: x => x.val });
    for (let i = 0; i < n - 1; i++) {
        pq.enqueue({ val: arr[i + 1] - arr[i], idx: i });
    }
    for (let i = 0; i < k; i++) {
        let top = pq.dequeue().element;
        let secIdx = top.idx;
        howMany[secIdx]++;
        let diff = arr[secIdx + 1] - arr[secIdx];
        let newSection = diff / (howMany[secIdx] + 1);
        pq.enqueue({ val: newSection, idx: secIdx });
    }
    return pq.dequeue().element.val;
}


// optimal solution
// time complexity: O(n log (max - min))
// space complexity: O(1)
function minmaxGasDist(arr, k) {
    const n = arr.length;
    let low = 0;
    let high = 0;
    for (let i = 0; i < n - 1; i++) {
        high = Math.max(high, arr[i + 1] - arr[i]);
    }
    while (high - low > 1e-6) {
        let mid = low + (high - low) / 2;
        let count = 0;
        for (let i = 0; i < n - 1; i++) {
            count += Math.floor((arr[i + 1] - arr[i]) / mid);
        }
        if (count > k) {
            low = mid;
        } else {
            high = mid;
        }
    } 
    return high;
}