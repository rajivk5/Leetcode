/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let depth = 0;
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (depth > 0) res.push(s[i]);
            depth++;
        } else {
            depth--;
            if (depth > 0) res.push(s[i]);
        }
    }

    return res.join('');
};