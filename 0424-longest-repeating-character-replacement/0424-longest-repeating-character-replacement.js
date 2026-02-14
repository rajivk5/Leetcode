/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let i = 0;
    let maxCount = 0;
    let maxWindow = 0;
    let map = Array(26).fill(0);

    for (let j = 0; j < s.length; j++) {
        let index = s.charCodeAt(j) - 65;
        map[index]++;

        maxCount = Math.max(maxCount, map[index]);

        // If window invalid → shrink
        if ((j - i + 1) - maxCount > k) {
            map[s.charCodeAt(i) - 65]--;
            i++;
        }

        maxWindow = Math.max(maxWindow, j - i + 1);
    }

    return maxWindow;
};
