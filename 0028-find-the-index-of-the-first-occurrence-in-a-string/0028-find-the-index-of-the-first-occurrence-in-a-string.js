/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (h, n) {
    if (n.length === 0) return 0;
    
    for (let i = 0; i <= h.length - n.length; i++) {
        let j = 0;

        for (j = 0; j < n.length; j++) {
            if (h[i + j] !== n[j]) break;
        }

        if (j === n.length) {
            return i;
        }
    }

    return -1

};