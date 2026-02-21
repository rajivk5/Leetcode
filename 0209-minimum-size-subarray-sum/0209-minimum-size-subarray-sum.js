/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, arr) {
    let i = 0;
    let sum = 0;
    let minLen = Infinity;
    for (let j = 0; j < arr.length; j++) {

        sum += arr[j];

        while (sum >= target) {
            minLen = Math.min(minLen, j - i + 1);
            sum -= arr[i]
            i++
        }
    }

    return minLen === Infinity ? 0 : minLen;
};