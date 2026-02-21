// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// brute force approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var maxProfit = function(prices) {
    let n = prices.length;
    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
};

// optimal approach
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxProfit = function(prices) {
    let n = prices.length;
    let mini = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < n; i++) {
      let cost = prices[i] - mini;
      maxProfit = Math.max(maxProfit, cost);
      mini = Math.min(mini, prices[i]);
    }
    return maxProfit;
};