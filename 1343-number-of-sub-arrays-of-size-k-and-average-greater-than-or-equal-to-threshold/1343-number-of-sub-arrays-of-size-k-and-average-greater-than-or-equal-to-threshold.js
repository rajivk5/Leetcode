/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let i = 0;
    let sum = 0;
    let q = [];
    let res = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
        q.push(arr[j])
        if (j - i + 1 === k) {
            if ((sum / k) >= threshold) {
                res++
            }
            q.shift();
            sum -= arr[i];
            i++
        }

    }
    return res
};