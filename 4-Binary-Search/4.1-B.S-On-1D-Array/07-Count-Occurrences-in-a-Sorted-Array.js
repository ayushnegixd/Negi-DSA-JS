// You are given a sorted array of integers arr and an integer target. Your task is to determine how many times target appears in arr.
// Return the count of occurrences of target in the array.

//brute force solution
// time complexity: O(n)
// space complexity: O(1)

function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
};

// better solution 
// time complexity: O(n)
// space complexity: O(1)

function countOccurrences(arr, target) {
  let n = arr.length;
  let low = 0, high = n - 1;
  let index = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      index = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (index === -1) return 0;
  let count = 0;
  for (let i = index; i < n && arr[i] === target; i++) {
    count++;
  }
  return count;
};


// optimal solution
// time complexity: O(log n)
// space complexity: O(1)

function countOccurrences(arr, target) {
  const findBound = (isFirst) => {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        if (isFirst) right = mid - 1;
        else left = mid + 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };
  
  const start = findBound(true);
  if (start === -1) return 0;
  const end = findBound(false);
  
  return end - start + 1;
};