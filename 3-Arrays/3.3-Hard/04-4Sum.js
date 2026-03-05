// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.


// brute force approach
// Time Complexity: O(n^4) 
// Space Complexity: O(2 x quads)

var fourSum = function(nums, target) {
    let result = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
                        let quad = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b);
                        result.add(quad.toString());
                    }
                }
            }
        }
    }
    return Array.from(result).map(str => str.split(',').map(Number));
};

// better approach (using hash set)
// Time Complexity: O(n^3) + O(1) 
// Space Complexity: O(n)

var fourSum = function(nums, target) {
    let n = nums.length;
    let st = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let hashSet = new Set();
            for (let k = j + 1; k < n; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let fourth = target - sum;
                if (hashSet.has(fourth)) {
                    let temp = [nums[i], nums[j], nums[k], fourth].sort((a, b) => a - b);
                    st.add(temp.toString());
                }
                hashSet.add(nums[k]);
            }
        }
    }
    return Array.from(st).map(str => str.split(',').map(Number));
};

// optimal approach (using sorting and two pointers)
// Time Complexity: O(n^3) 
// Space Complexity: O(1)

var fourSum = function(nums, target) {
    let n = nums.length;
    let ans = [];
    nums.sort((a, b) => a -b);
    for (let i = 0; i < n; i ++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < n; j ++) {
            if( j !== (i + 1) && nums[j] === nums[j - 1]) continue;
            let k = j + 1;
            let l = n - 1;
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    let temp = [nums[i], nums[j], nums[k], nums[l]];
                    ans.push(temp);
                    k ++;
                    l --;
                while (k < l && nums[k] === nums[k - 1]) k ++;
                while (k < l && nums[l] === nums[l + 1]) l --;
                }
                else if (sum < target) k ++;
                else l --;
            }
        }
    }
    return ans;
};