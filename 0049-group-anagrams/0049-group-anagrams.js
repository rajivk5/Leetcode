/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

//1st approach

  /*   const map = {}

    for (let i = 0; i < strs.length; i++) {

        let ch = strs[i].split('').sort().join('');
        if (!map[ch]) {
            map[ch] = [strs[i]];
        } else {
            map[ch].push(strs[i])
        }

    }

    return [...Object.values(map)] */

//2nd approach

     let map = {}
    for (let i = 0; i < strs.length; i++) {
        let freqArr = Array(26).fill(0);
        let s = strs[i];
        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt() - 'a'.charCodeAt()
            freqArr[index]++

        }
        let key = "";
        for (let k = 0; k < 26; k++) {
            key = key + '#' + freqArr[k]
        }
        if (!map[key]) {
            map[key] = [s]
        } else {
            map[key].push(s)
        }
    }
    return [...Object.values(map)]
};