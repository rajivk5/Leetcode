/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let L = 0;
    let R = 0;
    let count = 0;

    for (latter of s) {

        if (latter == 'L') {
            L++

        } else {
            R++

        }

        if (L == R) {
            count++
            L = 0;
            R = 0;
        }


    }

    return count;
};