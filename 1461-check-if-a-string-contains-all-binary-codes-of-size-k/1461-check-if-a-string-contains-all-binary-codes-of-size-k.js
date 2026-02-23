/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let set = new Set();

    for (let i = 0; i <= s.length - k; i++) {
        let sub = s.substring(i, i + k);
        set.add(sub);
    }

    return set.size === (1 << k);
};