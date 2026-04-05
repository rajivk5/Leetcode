/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let stack = [];
    let seen = new Set();
    let freq = {};

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of s) {
        freq[ch]--;

        if (seen.has(ch)) continue;

        while (
            stack.length > 0 &&
            stack[stack.length - 1] > ch &&
            freq[stack[stack.length - 1]] > 0
        ) {
            seen.delete(stack.pop());
        }

        stack.push(ch);
        seen.add(ch);
    }

    return stack.join('');
};