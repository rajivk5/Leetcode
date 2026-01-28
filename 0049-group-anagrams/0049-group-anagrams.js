/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
   const groups = new Map();

    for (const word of strs) {

        let ch = word.split('').sort().join('');
        if (!groups.has(ch)) {
            groups.set(ch, []);
        }

        groups.get(ch).push(word);



    }
    
    return [...groups.values()];
};