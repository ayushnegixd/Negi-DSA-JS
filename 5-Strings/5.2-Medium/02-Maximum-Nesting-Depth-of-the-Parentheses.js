// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.


// brute force solution
// time complexity: O(n)
// space complexity: O(n)
function maxDepth(s) {
  let depth = 0;
  let maxDepth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      depth++;
      maxDepth = Math.max(maxDepth, depth);
    } else if (s[i] === ')') {
      depth--;
    }
  }
  return maxDepth;
};


// optimal solution
// time complexity: O(n)
// space complexity: O(1)
function maxDepthOptimal(s) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      current++;
      max = Math.max(max, current);
    } else if (s[i] === ')') {
      current--;
    }
  }
  return max;
};