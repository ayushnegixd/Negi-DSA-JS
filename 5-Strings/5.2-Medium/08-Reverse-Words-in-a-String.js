// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


// brute force solution
// time complexity: O(n)
// space complexity: O(n)
function reverseWordsBrute(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

// better solution using two pointers
// time complexity: O(n)
// space complexity: O(n)
function reverseWordsBetter(s) {
    let left = 0;
    let right = s.length - 1;
    while (left <= right && s[left] === ' ') {
        left++;
    }
    while (left <= right && s[right] === ' ') {
        right--;
    }
    const words = [];
    let word = '';
    for (let i = left; i <= right; i++) {
        if (s[i] === ' ' && word) {
            words.push(word);
            word = '';
        } else if (s[i] !== ' ') {
            word += s[i];
        }
    }
    if (word) {
        words.push(word);
    }
    return words.reverse().join(' ');
};

// optimal solution using in-place reversal
// time complexity: O(n)
// space complexity: O(n)
function reverseWordsOptimal(s) {
    const arr = s.split('');
    reverse(arr, 0, arr.length - 1);
    let start = 0;
    for (let end = 0; end < arr.length; end++) {
        if (arr[end] === ' ') {
            reverse(arr, start, end - 1);
            start = end + 1;
        }
    }
    reverse(arr, start, arr.length - 1);
    return arr.join('').trim().replace(/\s+/g, ' ');
};

function reverse(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
};