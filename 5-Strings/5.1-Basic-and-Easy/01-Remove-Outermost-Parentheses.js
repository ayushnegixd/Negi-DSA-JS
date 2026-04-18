// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.


// brute force solution
// time complexity: O(n)
// space complexity: O(n)

function removeOuterParentheses(s) {
    let stack = [];
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (stack.length > 0) {
                res += s[i];
            }
            stack.push(s[i]);
        } else {
            stack.pop();
            if (stack.length > 0) {
                res += s[i];
            }
        }
    }
    return res;
};

// optimal solution
// time complexity: O(n)
// space complexity: O(1)

function removeOuterParentheses(s) {
  let result = '';
  let count = 0;
  for (let char of s) {
    if (char === '(') {
      if (count > 0) result += char;
      count++;
    } else {
      count--;
      if (count > 0) result += char;
    }
  }
  return result;
};