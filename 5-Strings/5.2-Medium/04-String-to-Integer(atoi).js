// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.


// brute force solution
// time complexity: O(n)
// space complexity: O(1)
function myAtoiBrute(s) {
    let result = 0;
    let sign = 1;
    let i = 0;        
    while (i < s.length && s[i] === ' ') i++;
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '+' ? 1 : -1;
        i++;
    }
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
    }
    result *= sign;
    if (result < -Math.pow(2, 31)) return -Math.pow(2, 31);
    if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    return result;
};

// optimal solution
// time complexity: O(n)
// space complexity: O(1)
function myAtoiOptimal(s) {
    let result = 0;
    let sign = 1;
    let i = 0;        
    while (i < s.length && s[i] === ' ') i++;
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '+' ? 1 : -1;
        i++;
    }
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';
        if (result > Math.floor((Math.pow(2, 31) - 1 - digit) / 10)) {
            return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
        }
        result = result * 10 + digit;
        i++;
    }
    return result * sign;
};