// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.

// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.


// brute force approach using set
// Time Complexity: O((n + m) log(n + m)) due to sorting the set
// Space Complexity: O(n + m) for the set

var findUnion = function(nums1, nums2) {
    const unionSet = new Set([...nums1, ...nums2]);
    return Array.from(unionSet).sort((a, b) => a - b);
};

// optimal approach using two pointers
// Time Complexity: O(n + m) linear pass through both arrays
// Space Complexity: O(n + m) to store the union array

var findUnion = function(nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length;
    let i = 0, j = 0;
    const unionArr = [];
    while (i < n1 && j < n2) {
        if (nums1[i] < nums2[j]) {
            if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== nums1[i]) {
                unionArr.push(nums1[i]);
            }
            i++;
        } 
        else {
            if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== nums2[j]) {
                unionArr.push(nums2[j]);
            }
            j++;
        }
    }
    while (i < n1) {
        if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== nums1[i]) {
            unionArr.push(nums1[i]);
        }
        i++;
    }
    while (j < n2) {
        if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== nums2[j]) {
            unionArr.push(nums2[j]);
        }
        j++;
    }
    return unionArr;
};