/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let n = s.length;
    let sign = 1;
    let result = 0;
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);

    // Step 1: Ignore leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }

    // Step 3: Convert digits to integer
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;

        // Step 4: Handle overflow and underflow
        if (result * sign > INT_MAX) {
            return INT_MAX;
        }
        if (result * sign < INT_MIN) {
            return INT_MIN;
        }
    }

    return result * sign;
};

// Example usage:
console.log(myAtoi("42"));          // Output: 42
console.log(myAtoi("   -042"));     // Output: -42
console.log(myAtoi("1337c0d3"));    // Output: 1337
console.log(myAtoi("0-1"));         // Output: 0
console.log(myAtoi("words and 987"));// Output: 0