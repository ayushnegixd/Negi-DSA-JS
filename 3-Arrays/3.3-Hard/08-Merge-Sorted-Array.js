// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// brute force approach
// Time Complexity: O(n+m)
// Space Complexity: O(n+m)
var merge = function(nums1, m, nums2, n) {
    let merged = [];
    let i = 0, j = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    while (i < m) {
        merged.push(nums1[i]);
        i++;
    }
    while (j < n) {
        merged.push(nums2[j]);
        j++;
    }
    for (let k = 0; k < merged.length; k++) {
        nums1[k] = merged[k];
    }
};

// optimal approach-1 (gap method)
// Time Complexity: O((n+m)log(n+m))
// Space Complexity: O(1)
var merge = function(nums1, m, nums2, n) {
    function swapifgreater(nums1, nums2, ind1, ind2) {
    if (nums1[ind1] > nums2[ind2]) {
        [nums1[ind1], nums2[ind2]] = [nums2[ind2], nums1[ind1]];
        }
    }
    let len = n + m;
    let gap = Math.ceil(len / 2);
    while (gap > 0) {
        let left = 0;
        let right = left + gap;
        while (right < len) {
            if (left < m && right >= m) {
                swapifgreater(nums1, nums2, left, right - m);
            }
            else if (left >= m) {
                swapifgreater(nums2, nums2, left - m, right - m);
            }
            else {
                swapifgreater(nums1, nums1, left, right)
            }
            left ++;
            right ++;
        }
        if (gap === 1) break;
        gap = Math.ceil(gap / 2);
    }
    for (let i = 0; i < n; i ++) {
        nums1[m + i] = nums2[i];
    }
};

// optimal approach-2 (swap & sort)
// Time Complexity: O(min(n, m) + mlog m + nlog n)
// Space Complexity: O(1)
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = 0;
    while (i >= 0 && j < n) {
        if (nums1[i] > nums2[j]) {
            [nums1[i], nums2[j]] = [nums2[j], nums1[i]];
            i--;
            j++;
        } else {
            break;
        }
    }
    let firstPart = nums1.slice(0, m).sort((a, b) => a - b);
    for (let k = 0; k < m; k++) {
        nums1[k] = firstPart[k];
    }
    nums2.sort((a, b) => a - b);

    for (let k = 0; k < n; k++) {
        nums1[m + k] = nums2[k];
    }
};

// optimal approach-3 (two pointers from end)
// Time Complexity: O(n+m)
// Space Complexity: O(1)
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};