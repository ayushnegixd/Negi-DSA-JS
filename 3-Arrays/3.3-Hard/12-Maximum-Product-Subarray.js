// Given an integer array nums, find a subarray that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// Note that the product of an array with a single element is the value of that element.


// brute force approach
// Time Complexity: O(n^3)
// Space Complexity: O(1)

var maxProduct = function(nums) {
    let n = nums.length;
    let maxProduct = -Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let product = 1;
            for (let k = i; k <= j; k++) {
                product *= nums[k];
            }
            maxProduct = Math.max(maxProduct, product);
        }
    }
    return maxProduct;
};

// better approach (optimized brute force using prefix product)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var maxProduct = function(nums) {
    let n = nums.length;
    let maxProduct = -Infinity;
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
            product *= nums[j];
            maxProduct = Math.max(maxProduct, product);
        }
    }
    return maxProduct;
};

// optimal approach (Kadane's Algorithm for products)
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxProduct = function(nums) {
    let n = nums.length;
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }
        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);
        result = Math.max(result, maxProduct);
    }
    return result;
}

// optimal approach-2 (observation based) 
// Time Complexity: O(n)
// Space Complexity: O(1)

var maxProduct = function(nums) {
  let n = nums.length;
  let pre = 1, suff = 1;
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre *= nums[i];
    suff *= nums[n - 1 - i];
    ans = Math.max(ans, pre, suff);
  }
  return ans === -0 ? 0 : ans;
};