/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('')
    let i = 0;
    let j = s.length - 1;
    let map = new Map([
        ['a', 1], ['e', 2], ['i', 3], ['o', 4], ['u', 5], ['A', 6], ['E', 7], ['I', 8], ['O', 9], ['U', 10]
    ]);
    while (i < j) {
        if (map.has(s[i]) && map.has(s[j])) {
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
        else if (map.has(s[i])) {
            j--;
        }
        else if (map.has(s[j])) {
            i++;
        }
        else {
            i++;
            j--;
        }
    }

    return s.join('')
};