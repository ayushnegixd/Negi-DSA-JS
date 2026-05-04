// You are given a string s and a positive integer k.
// Return the number of substrings that contain exactly k distinct characters.

// brute force solution
// time complexity: O(n^3)
// space complexity: O(n)
function countKDistinctBrute(s, k) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substring(i, j + 1);
            const distinctChars = new Set(substring);
            if (distinctChars.size === k) {
                count++;
            }
        }
    }
    return count;
};


// better solution using sliding window
// time complexity: O(n^2)
// space complexity: O(n)
function countKDistinctSlidingWindow(s, k) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const charCount = new Map();
        for (let j = i; j < s.length; j++) {
            const char = s[j];
            charCount.set(char, (charCount.get(char) || 0) + 1);
            if (charCount.size === k) {
                count++;
            } else if (charCount.size > k) {
                break;
            }
        }
    }
    return count;
};

// optimal solution using sliding window math
// time complexity: O(n)
// space complexity: O(1) (since map size is at most 26 for lowercase English letters)
function countKDistinctOptimal(s, k) {
    function atMostK(s, k) {
        if (k === 0) return 0;
        let count = 0;
        let left = 0;
        const charCount = new Map();
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            charCount.set(char, (charCount.get(char) || 0) + 1);
            while (charCount.size > k) {
                const leftChar = s[left];
                charCount.set(leftChar, charCount.get(leftChar) - 1);
                if (charCount.get(leftChar) === 0) {
                    charCount.delete(leftChar);
                }
                left++;
            }
            count += right - left + 1;
        }
        return count;
    }
  return atMostK(s, k) - atMostK(s, k - 1);
};