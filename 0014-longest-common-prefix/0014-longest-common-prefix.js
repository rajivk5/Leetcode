/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let k = 0;

    while (k < strs[0].length) {
        let ch = strs[0][k]
        for (let i = 1; i < strs.length; i++) {

            if (ch != strs[i][k] || k === strs[i].length) {
                return strs[0].substring(0, k)
            }


        }
        ++k

    }

    return strs[0]
};