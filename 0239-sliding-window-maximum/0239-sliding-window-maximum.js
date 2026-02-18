/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (arr, k) {
    let result = [];
    let q = [];
    let i = j = 0;
    while (j < arr.length) {
        while (q.length && arr[j] > q[q.length-1]) q.pop();
        q.push(arr[j])
        if (j >= k - 1) {
            result.push(q[0])
            arr[i] === q[0] && q.shift();
            i++;
        }
        j++
    }

    return result;
};