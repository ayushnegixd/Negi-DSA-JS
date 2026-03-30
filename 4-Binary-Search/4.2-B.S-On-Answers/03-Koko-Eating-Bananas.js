// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.


// brute force solution
// time complexity: O(max(piles))
// space complexity: O(1)

function minEatingSpeed(piles, h) {
    let maxPile = Math.max(...piles);
    for (let k = 1; k <= maxPile; k++) {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / k);
        }
        if (hours <= h) {
            return k;
        }
    }
    return maxPile;
};

// optimal solution
// time complexity: O(N * log(max(piles)))
// space complexity: O(1)

function minEatingSpeed(piles, h) {
  function findMax(v) {
    let maxi = -Infinity;
    for (let i = 0; i < v.length; i++) {
      maxi = Math.max(maxi, v[i]);
    }
    return maxi;
  }
      function calculateTotalHours(v, hourly) {
        let totalH = 0;
        for (let i = 0; i < v.length; i++) {
          totalH += Math.ceil(v[i] / hourly);
        }
      return totalH;
    }
      let low = 1;
      let high = findMax(piles);
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let totalH = calculateTotalHours(piles, mid);
      if (totalH <= h) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  return low;
};