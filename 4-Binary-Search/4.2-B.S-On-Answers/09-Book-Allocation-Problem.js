// Given an array nums of n integers, where nums[i] represents the number of pages in the i-th book, and an integer m representing the number of students, allocate all the books to the students so that each student gets at least one book, each book is allocated to only one student, and the allocation is contiguous.
// Allocate the books to m students in such a way that the maximum number of pages assigned to a student is minimized. If the allocation of books is not possible, return -1.


// brute force solution
// time complexity: O(n * (sum - max + 1))
// space complexity: O(1)
function isFeasible(nums, m, maxPages) {
    let studentCount = 1;
    let currentPages = 0;
    for (let i = 0; i < nums.length; i++) {
        if (currentPages + nums[i] > maxPages) {
            studentCount++;
            currentPages = nums[i];
            if (studentCount > m) {
                return false;
            }
        } else {
            currentPages += nums[i];
        }
    }
    return true;
}

function bookAllocation(nums, m) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, nums[i]);
    }
    for (let i = max; i <= sum; i++) {
        if (isFeasible(nums, m, i)) {
            return i;
        }
    }
    return -1;
};

// optimal solution using binary search
// time complexity: O(n log(sum - max + 1))
// space complexity: O(1)
function splitArray(nums, k) {
  function CountPartitions(arr, maxSum) {
    let partitions = 1;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (currentSum + arr[i] <= maxSum) {
        currentSum += arr[i];
      } else {
       partitions++;
        currentSum = arr[i];
      }
    }
    return partitions;
  }

  let low = Math.max(...nums);
  let high = nums.reduce((a, b) => a + b, 0);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let nPartitions = CountPartitions(nums, mid);
    if (nPartitions <= k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}