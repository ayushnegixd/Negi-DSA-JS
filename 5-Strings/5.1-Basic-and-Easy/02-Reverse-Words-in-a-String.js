// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.



//brute force solution
// time complexity: O(n)
// space complexity: O(n)

function reverseWords(s) {
    let words = s.trim().split(/\s+/);
    return words.reverse().join(' ');
};

// optimal solution
// time complexity: O(n)
// space complexity: O(n)

function reverseWords(s) {
    let result = '';
    let word = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (word.length > 0) {
                result += word + ' ';
                word = '';
            }
        } else {
            word = s[i] + word;
        }
    }
    if (word.length > 0) {
        result += word;
    }
    return result.trim();
}; 