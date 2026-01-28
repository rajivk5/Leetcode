/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    const map = {}

    for (let i = 0; i < strs.length; i++) {

        let ch = strs[i].split('').sort().join('');
        if (!map[ch]) {
            map[ch] = [strs[i]];
        } else {
            map[ch].push(strs[i])
        }

    }

    return [...Object.values(map)]
};