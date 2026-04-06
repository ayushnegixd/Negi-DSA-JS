// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

// Return the minimized largest sum of the split.
// A subarray is a contiguous part of the array.


// brute force solution
// time complexity: O(k * n)
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
  for (let i = low; i <= high; i++) {
    if (CountPartitions(nums, i) <= k) {
      return i;
    }
  }
};

// better approach (max heap)
// time complexity: O( N * log(n) + K * log(n))
// space complexity: O(n)
function splitArray(nums, k) {
  const maxHeap = new MaxPriorityQueue();
  for (let num of nums) {
    maxHeap.enqueue(num);
  }

  for (let i = 0; i < k - 1; i++) {
    let largest = maxHeap.dequeue().element;
    if (largest % 2 === 0) {
      maxHeap.enqueue(largest / 2);
      maxHeap.enqueue(largest / 2);
    } else {
      maxHeap.enqueue(Math.floor(largest / 2));
      maxHeap.enqueue(Math.ceil(largest / 2));
    }
  }

  return maxHeap.dequeue().element;
};

// optimal solution using binary search
// time complexity: O(n log(max - gap/precision))
// space complexity: O(1)

function splitArray(nums, k) {
  function countPartitions(arr, maxSum) {
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
      let nPartitions = countPartitions(nums, mid);
      if (nPartitions <= k) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  return low;
};