// You are given A painters and an array C of N integers where C[i] denotes the length of the ith board. Each painter takes B units of time to paint 1 unit of board. You must assign boards to painters such that:

// Each painter paints only contiguous segments of boards.
// No board can be split between painters.
// The goal is to minimize the time to paint all boards.
// Return the minimum time required to paint all boards modulo 10000003.


// brute force solution
// time complexity: O(n * (sum - max))
// space complexity: O(1)
function paint(A, B, C) {
    const n = C.length;
    const maxBoard = Math.max(...C);
    const totalLength = C.reduce((sum, length) => sum + length, 0);
    let low = maxBoard;
    let high = totalLength;
    
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        let paintersRequired = 1;
        let currentLength = 0;
        for (let i = 0; i < n; i++) {
            if (currentLength + C[i] > mid) {
                paintersRequired++;
                currentLength = C[i];
            } else {
                currentLength += C[i];
            }
        }
        if (paintersRequired > A) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } 
    return (low * B) % 10000003;
};

// optimal solution
// time complexity: O(n log (sum - max))
// space complexity: O(1)
function paint(A, B, C) {
  function countPainters(C, maxLength) {
    let painters = 1;
    let currentLength = 0;
    for (let i = 0; i < C.length; i++) {
      if (currentLength + C[i] > maxLength) {
        painters++;
        currentLength = C[i];
      } else {
        currentLength += C[i];
      }
    }
    return painters;
  }

  const maxBoard = Math.max(...C);
  const totalLength = C.reduce((sum, length) => sum + length, 0);
  let low = maxBoard;
  let high = totalLength;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const paintersRequired = countPainters(C, mid);
    if (paintersRequired > A) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return (low * B) % 10000003;
};