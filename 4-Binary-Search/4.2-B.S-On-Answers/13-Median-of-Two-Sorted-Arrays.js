// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// brute force solution
// time complexity: O(m + n)
// space complexity: O(m + n)
function findMedianSortedArraysBrute(nums1, nums2) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }
    const n = merged.length;
    if (n % 2 === 0) {
        return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    } else {
        return merged[Math.floor(n / 2)];
    }
};


//  better solution
// time complexity: O(m + n)
// space complexity: O(1)
function findMedianSortedArraysBetter(nums1, nums2) {
    const n = nums1.length + nums2.length;
    let i = 0;
    let j = 0;
    let prev = -1;
    let curr = -1;
    for (let k = 0; k <= Math.floor(n / 2); k++) {
        prev = curr;
        if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
            curr = nums1[i];
            i++;
        } else {
            curr = nums2[j];
            j++;
        }
    }
    if (n % 2 === 0) {
        return (prev + curr) / 2;
    } else {
        return curr;
    }
};

// optimal solution
// time complexity: O(log(min(m, n)))
// space complexity: O(1)
function findMedianSortedArrays(nums1, nums2) {
   let m = nums1.length;
   let n = nums2.length;
   if (m > n) {
       return findMedianSortedArrays(nums2, nums1);
   }
   let low = 0;
   let high = m;
   let left = Math.floor((m + n + 1) / 2);
   let total = m + n;
      while (low <= high) {
       let mid1 = Math.floor(low + (high - low) / 2);
       let mid2 = left - mid1;
       let l1 = -Infinity, l2 = -Infinity, r1 = Infinity, r2 = Infinity;
       if (mid1 < m) r1 = nums1[mid1];
       if (mid2 < n) r2 = nums2[mid2];
       if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
       if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1];
        if (l1 <= r2 && l2 <= r1) {
            if (total % 2 === 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
            } else {
                return Math.max(l1, l2);
            }
        } else if (l1 > r2) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
    }
  return 0;
}; 