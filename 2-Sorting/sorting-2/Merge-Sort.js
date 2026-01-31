// Given an array of integers, nums,sort the array in non-decreasing order using the merge sort algorithm. Return the sorted array.

// A sorted array in non-decreasing order is one in which each element is either greater than or equal to all the elements to its left in the array.


class Solution {
    mergeSort(nums) {
        this.mS(nums, 0, nums.length - 1);
        return nums;
    }

    // 2. Recursive Helper Function (Divide)
    mS(arr, low, high) {
        // Base Case: If single element or invalid range, stop
        if (low >= high) return;

        // Calculate middle index
        let mid = Math.floor((low + high) / 2);

        // Recursively sort the left half
        this.mS(arr, low, mid);

        // Recursively sort the right half
        this.mS(arr, mid + 1, high);

        // Merge the two sorted halves
        this.merge(arr, low, mid, high);
    }

    // 3. Merge Function (Conquer)
    merge(arr, low, mid, high) {
        let temp = [];
        let left = low;      // Pointer for left half [low...mid]
        let right = mid + 1; // Pointer for right half [mid+1...high]

        // Compare elements and store the smaller one in temp
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        }

        // Add any remaining elements from the left half
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        // Add any remaining elements from the right half
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        // Copy sorted elements from temp back to the original array
        for (let i = 0; i < temp.length; i++) {
            arr[low + i] = temp[i];
        }
    }
}