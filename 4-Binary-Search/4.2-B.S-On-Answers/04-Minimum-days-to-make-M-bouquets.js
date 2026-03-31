// You are given an integer array bloomDay, an integer m and an integer k.
// You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

// The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.
// Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.


// brute force solution
// time complexity: O(n * (max - min + 1))
// space complexity: O(1)
function minDays(bloomDay, m, k) {
    const n = bloomDay.length;
    if (m * k > n) return -1;
    const minDay = Math.min(...bloomDay);
    const maxDay = Math.max(...bloomDay);
    
    for (let day = minDay; day <= maxDay; day++) {
        let bouquets = 0;
        let flowers = 0;
        for (let i = 0; i < n; i++) {
            if (bloomDay[i] <= day) {
                flowers++;
                if (flowers === k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        if (bouquets >= m) return day;
    }
    return -1;
};

// optimal solution
// time complexity: O(n * log(max - min + 1))
// space complexity: O(1)
function minDays(bloomDay, m, k) {
  function isPossible(bloomDay, m, k, day) {
    let count = 0;
    let boquets = 0;
    for (let bloom of bloomDay) {
      if (bloom <= day) {
        count++;
        if (count === k) {
          boquets++;
          count = 0;
        }
      } else {
        count = 0;
      }
    }
    return boquets >= m;
  }

  if (m * k > bloomDay.length) return -1;
     let minDay = Infinity;
     let maxDay = -Infinity;
     for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] < minDay) minDay = bloomDay[i];
      if (bloomDay[i] > maxDay) maxDay = bloomDay[i];
    }
    let result = -1;
    while (minDay <= maxDay) {
      let mid = Math.floor((minDay + maxDay) / 2);
      if (isPossible(bloomDay, m, k, mid)) {
        result = mid;
        maxDay = mid - 1;
      } else {
        minDay = mid + 1;
      }
    }
  return result;
};