/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let maxL = [];
    maxL[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i])

    }

    let maxR = [];
    maxR[arr.length - 1] = arr[arr.length - 1];
    for (let j = arr.length - 2; j >= 0; j--) {
        maxR[j] = Math.max(arr[j], maxR[j + 1])

    }


    let ans = 0;
    for (let k = 0; k < arr.length; k++) {
        ans += Math.max((Math.min(maxL[k], maxR[k])) - arr[k], 0)
    }

    return ans;
};