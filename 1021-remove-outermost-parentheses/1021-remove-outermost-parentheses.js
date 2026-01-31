/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let ans = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (stack.length > 0) ans += '('; // inner '('
            stack.push('(');
        } else {
            stack.pop();
            if (stack.length > 0) ans += ')'; // inner ')'
        }
    }

    return ans;
};