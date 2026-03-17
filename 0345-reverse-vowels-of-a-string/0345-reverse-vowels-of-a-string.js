/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('')
    let i = 0;
    let j = s.length - 1;
    let map = new Set('aeiouAEIOU')
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