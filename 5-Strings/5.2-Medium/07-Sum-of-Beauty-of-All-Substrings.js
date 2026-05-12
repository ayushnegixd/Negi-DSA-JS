// The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

// For example, the beauty of "abaacc" is 3 - 1 = 2.
// Given a string s, return the sum of beauty of all of its substrings.


// brute force solution
// time complexity: O(n^3)
// space complexity: O(n)
function beautySumBrute(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let freq = {};
            let sub = s.substring(i, j + 1);
            for (let char of sub) {
                freq[char] = (freq[char] || 0) + 1;
            }
            let values = Object.values(freq);
            total += Math.max(...values) - Math.min(...values);
        }
    }
    return total;
};

function calculateBeauty(str) {
    const frequency = {};
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    const values = Object.values(frequency);
    const maxFreq = Math.max(...values);
    const minFreq = Math.min(...values);
    return maxFreq - minFreq;
};


// better solution using frequency array
// time complexity: O(n^2)
// space complexity: O(1)
function beautySumBetter(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = i; j < s.length; j++) {
            freq[s.charCodeAt(j) - 97]++;
            let max = Math.max(...freq);
            let min = Math.min(...freq.filter(f => f > 0));
            total += max - min;
        }
    }
    return total;
};

// optimal solution using prefix frequency array
// time complexity: O(n^2)
// space complexity: O(n)
function beautySumOptimal(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let freq = new Array(26).fill(0);
        for (let j = i; j < s.length; j++) {
            freq[s.charCodeAt(j) - 97]++;
            let max = 0;
            let min = Infinity;
            for (let k = 0; k < 26; k++) {
                if (freq[k] > 0) {
                    if (freq[k] > max) max = freq[k];
                    if (freq[k] < min) min = freq[k];
                }
            }
            total += max - min;
        }
    }
    return total;
};