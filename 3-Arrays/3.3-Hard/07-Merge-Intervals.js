// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


// brute force approach
// Time Complexity: O(nlog n) + O(2n)
// Space Complexity: O(n)
var merge = function(intervals) {
    if (intervals.length === 0) {
        return [];
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [];
    let currentInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (currentInterval[1] >= intervals[i][0]) {
            currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
        } else {
            merged.push(currentInterval);
            currentInterval = intervals[i];
        }
    }
    merged.push(currentInterval);
    return merged;
};

// optimal approach (using stack)
// Time Complexity: O(nlog n) + O(n)
// Space Complexity: O(n)
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    return merged;
};