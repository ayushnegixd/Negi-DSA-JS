// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.


// brute force solution
// time complexity: O(n log n)
// space complexity: O(n)
function frequencySort(s) {
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }
  return Object.keys(count).sort((a, b) => count[b] - count[a]).join('');
};


// optimal solution
// time complexity: O(n)
// space complexity: O(n)
function frequencySortOptimal(s) {
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }
  const buckets = new Array(s.length + 1).fill().map(() => []);
  for (let char in count) {
    buckets[count[char]].push(char);
  }
  let result = '';
  for (let i = buckets.length - 1; i >= 0; i--) {
    for (let char of buckets[i]) {
      result += char.repeat(i);
    }
  }
  return result;
};