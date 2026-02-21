/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (arr, k) {
    let i = 0;
    let zeroCount = 0;
    let maxLen = 0;
    for (let j = 0; j < arr.length; j++) {

        if (arr[j] === 0) {
            zeroCount++
        }

        while (zeroCount > k) {
            if (arr[i] == 0) {
                zeroCount--
            }

            i++
        }

        maxLen = Math.max(maxLen, j - i + 1)
    }

    return maxLen;
};