// A conveyor belt has packages that must be shipped from one port to another within days days.

// The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.


// brute force solution
// time complexity: O(n * (sum - max + 1))
// space complexity: O(1)
function shipWithinDays(weights, days) {
    let max = Math.max(...weights);
    let sum = weights.reduce((a, b) => a + b, 0); 
    let left = max;
    while (left <= sum) {
        let capacity = left;
        let dayCount = 1;
        let currentLoad = 0;
        for (let i = 0; i < weights.length; i++) {
            if (currentLoad + weights[i] > capacity) {
                dayCount++;
                currentLoad = 0;
            }
            currentLoad += weights[i];
        }
        if (dayCount <= days) {
            return capacity;
        }
        left++;
    }
    return left;
};

// optimal solution
// time complexity: O(n * log (sum - max + 1))
// space complexity: O(1)
function shipWithinDays(weights, days) {
  function findDays(weights, cap) {
    let days = 1;
    let load = 0;
    let n = weights.length;
    for (let i = 0; i < n; i++) {
      if (load + weights[i] > cap) {
        days+= 1;
      load = weights[i];
    }
    else load += weights[i];
  }
  return days;
}
   let low = Math.max(...weights);
   let high = weights.reduce((sum, weight) => sum + weight, 0);
   while (low <= high) {
     let mid = Math.floor(low + (high - low) / 2);
     let numberOfDays = findDays(weights, mid);
     if (numberOfDays <= days) {
       high = mid - 1;
      }
       else low = mid + 1;
    }
  return low;
};